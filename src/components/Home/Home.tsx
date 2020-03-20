import * as React from "react";
import { HOC } from "../HOC/Hoc";
import { LifeCycle } from "../LifeCycle/LIfeCycle";
export class Home extends React.Component {
 passTheNumber = 5;
  render() {
    return (
      <div>
        <HOC />
        <LifeCycle  myNumber={this.passTheNumber}/>
      </div>
    );
  }
}
