//alt1 base libs, provides all the commonly used methods for image matching and capture
//also gives your editor info about the window.alt1 api
import * as a1lib from "@alt1/base";
import { ImgRef } from "@alt1/base";

var imgs = a1lib.ImageDetect.webpackImages({
	homeport: require("../../public/homebutton.data.png")
});


export const capture = (firstParagraph: any, capturedImage: any) => {
	if (!window.alt1) {
		firstParagraph.current.innerText = "You need to run this page in alt1 to capture the screen";
		return;
	}
	if (!alt1.permissionPixel) {
		console.error("Page is not installed as app or capture permission is not enabled");
		firstParagraph.current.innerText = "Page is not installed as app or capture permission is not enabled";
		firstParagraph.current.style ="color: red;";
		return;
	}
	var img = a1lib.captureHoldFullRs();
	findHomeport(img, firstParagraph, capturedImage);
}

const findHomeport = (img: ImgRef, firstParagraph: any, capturedImage: any) => {
	var loc = img.findSubimage(imgs.homeport);
	firstParagraph.current.innerText = `homeport matches: ${JSON.stringify(loc)}`;
	//overlay the result on screen if running in alt1
	if (window.alt1) {
		if (loc.length != 0) {
			alt1.overLayRect(a1lib.mixColor(255, 255, 255), loc[0].x, loc[0].y, imgs.homeport.width, imgs.homeport.height, 2000, 3);
		} else {
			console.error("Couldn't find homeport button");
			alt1.overLayTextEx("Couldn't find homeport button", a1lib.mixColor(255, 255, 255), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
		}
	}

	//get raw pixels of image and show on screen (used mostly for debug)
	const width = 200;
	const height = 200;
	var buf = img.toData(100, 100, width, height);

	var tempCanvas = document.createElement("canvas");
	var tempCtx = tempCanvas.getContext("2d");
	tempCanvas.width = width;
	tempCanvas.height = height;
	tempCtx.putImageData(buf, 0, 0);
	capturedImage.current.src = tempCanvas.toDataURL("image/png");
}
