import * as React from "react";
import * as a1lib from "@alt1/base";
import { useState } from "react";
import { CapturedImage } from "../CapturedImage";
import "./PastedImageContainer.scss";
import { findHomeport } from "../../utils/homeport";

export const PastedImageContainer = () => {
  const [errorText, setErrorText] = useState("");
  const [homeportText, setHomeportText] = useState('-');
  const [imgSrc, setImgSrc] = useState("");

  a1lib.PasteInput.listen(img => {
    const {homeportText, imgSrc} = findHomeport(img);
    setHomeportText(homeportText);
    setImgSrc(imgSrc);
  }, (err, errid) => {
    setErrorText(`${errid} ${err}`);
  });

  return (
    <div className="pasted-image-container">
      {errorText && (
        <p>{errorText}</p>
      )}
      <p>
        Homeport from image: {homeportText}
      </p>
      <p>
        Paste an image from clipboard with ctrl+v. Homeport button will be detected (or not).
      </p>
      <p>
        The captured image will appear here
      </p>
      <CapturedImage src={imgSrc}/>
    </div>
  )
}
