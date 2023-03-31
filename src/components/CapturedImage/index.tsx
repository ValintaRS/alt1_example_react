import * as React from "react";
import "./CapturedImage.scss";

export const CapturedImage = (
  {src}:{src: string}
) => (
  <div className="captured-image">
    {src && (
      <img src={src}></img>
    )}
  </div>
)
