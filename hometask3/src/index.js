const express = require("express");
const noteRouter = require('./routes/notes')

const app = express();
const PORT = 5000;

app.use(express.json())

app.use('/notes', noteRouter)


app.listen(PORT, () => {
  console.log(`server in working on port ${PORT}`);
});
