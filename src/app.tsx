import * as React from "react";
import * as ReactDOM from "react-dom";

//  import { NamasteComponent } from "./components/namaste";
import { List } from "./components/list";

/***
 * This is the Entry Point
 * Adjacent JSX elements must be wrapped in an enclosing tag
 *  Ex.below code is not valid
  **  ReactDOM.render(<h1>1</h1><h2>2</h2>,
      document.getElementById('main'))
  **  ReactDOM.render(<div>
      <h1>1</h1>
      <h2>2</h2>
    </div>
    , document.getElementById('main'))
    is valid
 */
ReactDOM.render(
  <div>
    <List />
  </div>,
  document.getElementById("app-react")
);
