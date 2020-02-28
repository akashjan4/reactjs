import * as React from "react";
import { Namaste } from "./namaste";

export class List extends React.Component {
  render() {
    return (
      <div>
        <Namaste />
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    );
  }
}
