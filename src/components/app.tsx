import * as React from "react";
import { List } from "./list";
import { TopNavigation } from "./topNav";
import { MainContent } from "./mainContent";
import { Footer } from "./footer";

export class App extends React.Component {
  render() {
    return (
      <div className="parent-container">
        <TopNavigation />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
