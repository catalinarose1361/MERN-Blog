import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import NavBar from "./components/NavBar"
import NoMatch from "./pages/NoMatch"

import FooterComp from "./components/FooterComp";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/createPost" component={CreatePost} />
          <Route component={NoMatch} />
        </Switch>
        <FooterComp />
      </div>
    </Router>
  )
}

export default App;


