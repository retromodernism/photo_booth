import "./index.scss";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const RentTimeBtn = ({ className, title, value, active }) => {
  const [isActive, setActive] = useState(active);
  return (
    <Button
      className={`${className} ${
        isActive ? "rentTimeBtn rentTimeBtn_active" : "rentTimeBtn"
      }`}
      onClick={() => setActive(!isActive)}
      style={{
        padding: "3px 11px",
        fontSize: 12,
        fontFamily: "Open Sans",
        textTransform: "lowercase",
        minWidth: "unset",
        backgroundColor: isActive ? "#EE3D48" : "#f1f2f2",
        color: isActive ? "#ffffff" : "#131313",
      }}
    >
      {title}
    </Button>
  );
};

export default RentTimeBtn;
