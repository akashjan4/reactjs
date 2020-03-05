import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainContent } from "./mainContent";
import { NavigationBar } from "./navigationBar";
import { About } from "./About/About";
import { Services } from "./Services/Service";
import { SideNavigation } from "./sideNavigation/sideNavigation";

export class App extends React.Component {
  navigationLinks = [{ text: "About", link: "home" }];
  render() {
    return (
      <Router>
        <div className="parent-container">
          {/* <NavigationBar/>
        <MainContent /> */}
          {/* <SideNavigation /> */}
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </div>
      </Router>
    );
  }
}
