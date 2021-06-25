import "./index.scss";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import AnimateHeight from "react-animate-height";

const Leaf = ({ className, title, text, active = false }) => {
  const [isActive, setActive] = useState(active);

  return (
    <li className={`leaf ${className}`}>
      <Button
        className={
          isActive ? "leaf__button leaf__button_active" : "leaf__button"
        }
        style={{
          fontFamily: "Open Sans",
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "19px",
          color: isActive ? "#FFFFFF" : "#131313",
          background: isActive ? "#EE3D48" : "#FAFAFA",
          borderRadius: isActive ? "4px" : "0px",
          textTransform: "unset",
          padding: "14.5px 37px 14.5px 8px",
          width: "100%",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => setActive(!isActive)}
      >
        {title}
      </Button>
      <AnimateHeight
        className={
          isActive ? "leaf__content leaf__content_active" : "leaf__content"
        }
        height={isActive ? "auto" : 0}
        duration={300}
      >
        {text}
      </AnimateHeight>
    </li>
  );
};

export default Leaf;
