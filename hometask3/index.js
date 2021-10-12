const express = require("express");

const app = express();
const PORT = 5000;

app.get("*", (req, res) => {
    res.status(200).send('hello')
});

app.listen(PORT, () => {
  console.log(`server in working on port ${PORT}`);
});
