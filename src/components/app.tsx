import * as React from "react";
import { MainContent } from "./mainContent";
import { NavigationBar } from "./navigationBar";

export class App extends React.Component {
  render() {
    return (
      <div className="parent-container">
        <NavigationBar/>
        <MainContent />
      </div>
    );
  }
}
