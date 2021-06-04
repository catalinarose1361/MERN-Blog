import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/createPost" component={CreatePost} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;


