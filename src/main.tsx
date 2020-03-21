import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterComponent } from "./components/routing/routing";
import './style/style.scss';

ReactDOM.render(
  <div className="container-fluid">
    <div className="row">
      <RouterComponent />
    </div>
  </div>,
  document.getElementById("root")
);
