import React, {useEffect} from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import {getCalApi} from "@calcom/embed-react";

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {brandColor: "#000000"}
        }
      });
    })();
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
