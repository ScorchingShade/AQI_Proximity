import { Navbar } from "./components/Navbar";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import About from "./views/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <main>
        <Route path="/" exact  render={(props) => <Home {...props}/>}/>
        <Route path="/home" exact  render={(props) => <Home {...props}/>}/>
        <Route path="/login" exact  render={(props) => <Login {...props}/>}/>
        <Route path="/about" exact  render={(props) => <About {...props}/>}/>
        </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
