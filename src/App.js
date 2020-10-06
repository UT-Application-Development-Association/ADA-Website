import React, { useState } from "react";
import "./styles/Style.css";

import Opening from "./pages/Opening";
import Main from "./pages/Main";
import Left from "./pages/Left";
import Right from "./pages/Right";

function App() {
  const [currPage, setCurrPage] = useState("Opening");

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
