import React, { useState } from "react";
import "./App.css";
import {
  MyNewComponent,
  Button,
  Layout,
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
      <Layout
        left={null}
        right={null}
        center={<Button onClick={onButtonClick}>TEST</Button>}
        header={
          <MyNewComponent
            text={`this is our library component for increment ${test}`}
          />
        }
      />
    </div>
  );
}

export default App;
