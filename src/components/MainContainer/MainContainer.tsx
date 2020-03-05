import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "../About/About";
import { Services } from "../Services/Service";
import { Home } from "../Home/Home";
interface IProps {}
interface IState {
  sidePanelOpen: boolean;
}
export class MainContainer extends React.Component<IProps, IState> {
  sidePanel;
  mainPanel;

  constructor(props: IProps) {
    super(props);
    this.state = {
      sidePanelOpen: false
    };
    this.sidePanel = React.createRef();
    this.mainPanel = React.createRef();
  }
  openNav = () => {
    // document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    const div = this.mainPanel.current;
    div.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.setState({ sidePanelOpen: true });
  };

  closeNav = () => {
    // document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    //  document.body.style.backgroundColor = "white";
    const div = this.mainPanel.current;
    div.style.backgroundColor = "#ddd6d6";
    this.setState({ sidePanelOpen: false });
  };

  render() {
    return (
      <div>
        <div
          id="mySidenav"
          className={"sidenav " + (this.state.sidePanelOpen ? "open" : "close")}
        >
          <div
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#fff"
            }}
            className="closebtn"
            onClick={this.closeNav}
          >
            &times;
          </div>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/">Clients</a>
          <a href="/">Contact</a>
        </div>

        <div
          id="main"
          ref={this.mainPanel}
          className={this.state.sidePanelOpen ? "open" : "close"}
        >
          <span
            onClick={this.openNav}
            style={{
              display: this.state.sidePanelOpen ? "none" : "block",
              position: "absolute",
              top: 0,
            }}
          >
            open
          </span>
          {/* <h1>Main </h1>
          <h2>-- {`${this.state.sidePanelOpen}`}--</h2> */}
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Router>
        </div>
      </div>
    );
  }
}
