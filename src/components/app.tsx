import * as React from "react";
import { MainContainer } from "./MainContainer/MainContainer";

export class App extends React.Component {
  navigationLinks = [{ text: "About", link: "home" }];
  render() {
    return (
      <div className="parent-container">
        <MainContainer />
      </div>
    );
  }
}
