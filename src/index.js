import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "containers/App";
import * as serviceWorker from "./serviceWorker";

// style
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
