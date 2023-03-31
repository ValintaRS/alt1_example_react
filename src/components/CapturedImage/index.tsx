import * as React from "react";
import { forwardRef } from "react"
import "./CapturedImage.scss";

export const CapturedImage = forwardRef((
  props,
  ref: any
) => (
  <div className="captured-image">
    <img ref={ref}></img>
  </div>
))
