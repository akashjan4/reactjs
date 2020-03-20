import * as React from "react";
interface IProps {
  firstName: string;
  lastName: string;
}
interface IState {
  inputValue: string;
  textChanel?:string;
}
export class Test extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    console.log(props);
    this.state = {
      inputValue: "from states",
      textChanel:'txt'
    };
  }
  inputValue = "Basic";
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  };
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
            style={{ color: "red", fontSize: "16px" }}
          >
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <span onClick={this.openNav}>open</span>

        <div id="main">
          First name : {this.props.firstName}
          <hr />
          Last name : {this.props.lastName}
          <h1>{this.state.inputValue} </h1>
          <input
            type="text"
            onChange={event => {
              //  this.state.inputValue = event.target.value
             this.setState({inputValue:event.target.value})
            }}
          ></input>
        </div>
      </div>
    );
  }
}
