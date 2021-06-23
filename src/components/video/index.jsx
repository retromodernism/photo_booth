import "./index.scss";
import "react-modal-video/scss/modal-video.scss";

import React, { useState } from "react";
import {ReactComponent as Ellipses} from "./src/ellipses.svg";
// import {ReactComponent as Ellipse} from "./src/ellipse.svg";
import {ReactComponent as Ellipse} from "./src/ellipse1.svg";
import ModalVideo from "react-modal-video";

const Video = ({ videoId }) => {
  const [isOpen, setOpen] = useState(false);

  const closeVideo = () => {
    setOpen(false);
  };
  const openVideo = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <section className="video container" onClick={openVideo}>
        <Ellipses className="video__decoration video__elippses" />
        <Ellipse className="video__decoration video__elippse" />
        <div className="video__preview">
          <picture className="video__preview-picture">
            <source srcSet={`https://img.youtube.com/vi/${videoId}/0.jpg`} />
            <img src="#" alt="Превью" className="video__preview-img" />
          </picture>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={isOpen}
        videoId={videoId}
        onClose={closeVideo}
      />
    </React.Fragment>
  );
};

export default Video;
