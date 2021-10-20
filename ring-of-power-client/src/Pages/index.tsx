//file: src/webpages/index.jsimport React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Youtube from "./youtube";
import Twitch from "./twitch";

const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/twitch" component={Twitch} />
      <Route exact path="/youtube" component={Youtube} />
    </Router>
  );
};
export default Webpages;
