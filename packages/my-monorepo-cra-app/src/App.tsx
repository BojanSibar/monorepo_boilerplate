import React, { useState } from "react";
import "./App.css";
import {
  MyNewComponent,
  Button,
  useRenderCounter
} from "@my-org/my-monorepo-ui-lib";

function App() {
  const [test, setTest] = useState(0);
  const onButtonClick = (e: any) => {
    console.log("event triggered ", e);
    const x = test + 10;
    setTest(x);
  };
  useRenderCounter("App");
  return (
    <div className="App">
      <header className="App-header">
        <MyNewComponent
          text={`this is our library component for increment ${test}`}
        />
        <Button onClick={onButtonClick}>TEST</Button>
      </header>
    </div>
  );
}

export default App;
