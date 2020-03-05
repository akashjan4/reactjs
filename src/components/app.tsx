import * as React from "react";
import { MainContent } from "./mainContent";
import { NavigationBar } from "./navigationBar";
import { SideNavigation } from "./sideNavigation/sideNavigation";

export class App extends React.Component {
  navigationLinks  = [{text:'About', link:'home'}]
  render() {
    return (
      <div className="parent-container">
        {/* <NavigationBar/>
        <MainContent /> */}
        <SideNavigation/>
      </div>
    );
  }
}
