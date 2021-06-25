import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header";
import React from "react";
import Video from "./components/video";
import Seo from "./components/seo";
import Advantages from "./components/advantages";
import Catalog from "./components/catalog";
import Faq from "./components/faq";
import Events from "./components/events";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Video videoId={"crjugtkXZN4"} />
        <Seo />
        <Advantages />
        <Catalog />
        <Faq />
        <Events />
      </main>
    </React.Fragment>
  );
};

export default App;
