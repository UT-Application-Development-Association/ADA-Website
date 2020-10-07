import React, { useState } from "react";
import "./styles/Style.css";

import Opening from "./pages/Opening";
import Main from "./pages/Main";
import Left from "./pages/Left";
import Right from "./pages/Right";
import useWindowSize from "./WindowSize";

function App() {
  const [currPage, setCurrPage] = useState("Opening");

  // size.height and size.width
  const size = useWindowSize();
  // mobile view
  if (size.width <= 766) {
    return (
      <div className="App">
        <Opening setCurrPage={setCurrPage} />
        <Main setCurrPage={setCurrPage} />
        <Left setCurrPage={setCurrPage} />
        <Right setCurrPage={setCurrPage} />
      </div>
    );
  }

  if (currPage === "Opening") {
    return (
      <div className="App">
        <Opening setCurrPage={setCurrPage} />
      </div>
    );
  } else if (currPage === "Main") {
    return (
      <div className="App">
        <Main setCurrPage={setCurrPage} />
      </div>
    );
  } else if (currPage === "Left") {
    return (
      <div className="App">
        <Left setCurrPage={setCurrPage} />
      </div>
    );
  } else if (currPage === "Right") {
    return (
      <div className="App">
        <Right setCurrPage={setCurrPage} />
      </div>
    );
  } else {
    return <div className="App">No {currPage} page</div>;
  }
}

export default App;
