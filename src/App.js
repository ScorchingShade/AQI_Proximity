import { Navbar } from "./components/Navbar";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <main>
        <Route path="/" exact  render={(props) => <Home {...props}/>}/>
        <Route path="/login" exact  render={(props) => <Login {...props}/>}/>
        </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
