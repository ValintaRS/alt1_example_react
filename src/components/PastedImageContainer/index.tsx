import * as React from "react";
import * as a1lib from "@alt1/base";
import { ImgRef } from "@alt1/base";
import { useState } from "react";
import { CapturedImage } from "../CapturedImage";
import "./PastedImageContainer.scss";

const imgs = a1lib.ImageDetect.webpackImages({
	homeport: require("../../../public/homebutton.data.png")
});

export const PastedImageContainer = () => {
  const [errorText, setErrorText] = useState(null);
  const [homeportText, setHomeportText] = useState('-');
  const [imgSrc, setImgSrc] = useState<string>("");

  a1lib.PasteInput.listen(img => {
    findHomeport(img);
  }, (err, errid) => {
    setErrorText(`${errid} ${err}`);
  });
  
  const findHomeport = (img: ImgRef) => {
    const loc = img.findSubimage(imgs.homeport);
    setHomeportText(`${JSON.stringify(loc)}`);
    //overlay the result on screen if running in alt1
    if (window.alt1) {
      if (loc.length != 0) {
        alt1.overLayRect(a1lib.mixColor(255, 255, 255), loc[0].x, loc[0].y, imgs.homeport.width, imgs.homeport.height, 2000, 3);
      } else {
        alt1.overLayTextEx("Couldn't find homeport button", a1lib.mixColor(255, 255, 255), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
      }
    }

    //get raw pixels of image and show on screen (used mostly for debug)
    const width = 200;
    const height = 200;
    const buf = img.toData(0, 0, width, height);

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = width;
    tempCanvas.height = height;
    tempCtx.putImageData(buf, 0, 0);
    
    setImgSrc(tempCanvas.toDataURL("image/png"));
  }

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
