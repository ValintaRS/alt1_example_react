import * as React from "react";
import { useRef } from "react";
import { forwardRef } from "react"
import { capture } from "../../utils/capture";
import { CapturedImage } from "../CapturedImage";
import "./CaptureButton.scss";

export const CaptureButton = forwardRef((
  props,
  ref,
) => {
  const capturedImage = useRef<any>(null);

  return (
    <div>
      <button
        className="capture-button"
        onClick={() => capture(ref, capturedImage)}
      >
        Capture
      </button>
      <p>
        The captured image will appear here
      </p>
        <CapturedImage ref={capturedImage} />
    </div>
  )
  }
)

