import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header";
import React from "react";
import Video from "./components/video";
import Seo from "./components/seo";
import Advantages from "./components/advantages";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main container">
        <Video videoId={"crjugtkXZN4"} />
        <Seo />
        <Advantages />
      </main>
    </React.Fragment>
  );
};

export default App;
