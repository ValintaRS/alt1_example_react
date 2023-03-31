
import * as React from "react";
import { CaptureContainer } from "./components/CaptureContainer";
import { PastedImageContainer } from "./components/PastedImageContainer";

const App = () => {
  return (
    <div className="app nisborder">
      <CaptureContainer />
      <div className="nisseperator relative"></div>
      <PastedImageContainer />
    </div>
  )
}

export default App
