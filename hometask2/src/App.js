import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react";
import Home from './pages/home/Home'
import Archive from './pages/archive/Archive'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
