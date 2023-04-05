import * as a1lib from "@alt1/base";
import { ImgRef } from "@alt1/base";

const imgs = a1lib.ImageDetect.webpackImages({
	homeport: require("../../public/homebutton.data.png")
});

export const findHomeport = (img: ImgRef, imgWidth = 200, imgHeight = 200): {homeportText: string, imgSrc: string} => {
  const loc = img.findSubimage(imgs.homeport);
  const homeportText = JSON.stringify(loc)
  // overlay the result on screen if running in alt1
  if (window.alt1) {
    if (loc.length != 0) {
      alt1.overLayRect(a1lib.mixColor(255, 255, 255), loc[0].x, loc[0].y, imgs.homeport.width, imgs.homeport.height, 2000, 3);
    } else {
      alt1.overLayTextEx("Couldn't find homeport button", a1lib.mixColor(255, 255, 255), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
    }
  }

  // get raw pixels of image
  const buf = img.toData(0, 0, imgWidth, imgHeight);

  // create Canvaselement and put image data
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  tempCanvas.width = imgWidth;
  tempCanvas.height = imgHeight;
  tempCtx.putImageData(buf, 0, 0);

  // create data URL containing a representation of the image in png format
  const imgSrc = tempCanvas.toDataURL("image/png");

  return {homeportText, imgSrc}
}
