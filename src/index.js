import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/font/stylesheet.css";
import "animate.css/animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color="255, 255 ,255"
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={5}
    />
  </>
);
