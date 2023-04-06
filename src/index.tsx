// alt1 base libs, provides all the commonly used methods for image matching and capture
// also gives your editor info about the window.alt1 api
import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss'

// // tell webpack to add index.html and appconfig.json to output
// require("!file-loader?name=[name].[ext]!./index.html");
// require("!file-loader?name=[name].[ext]!./appconfig.json");

// check if we are running inside alt1 by checking if the alt1 global exists
if (window.alt1) {
	// tell alt1 about the app
	// this makes alt1 show the add app button when running inside the embedded browser
	// also updates app settings if they are changed
	alt1.identifyAppUrl("../../appconfig.json");
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);