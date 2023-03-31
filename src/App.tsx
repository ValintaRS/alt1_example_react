
import * as React from "react";
import { useRef } from "react";
import { CaptureButton } from "./components/CaptureButton";

const App = () => {
  const firstParagraph = useRef<any>(null);

  return (
    <div className="app">
      <p 
        ref={firstParagraph}
      >
        Homeport matches: -
      </p>
      <CaptureButton
        ref={firstParagraph}
      />
    </div>
  )
}

export default App
