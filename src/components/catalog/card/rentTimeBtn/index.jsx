import "./index.scss";
import Button from "@material-ui/core/Button";

const RentTimeBtn = ({ className, title, active, onClick }) => {
  return (
    <Button
      className={`${className} ${
        active ? "rentTimeBtn rentTimeBtn_active" : "rentTimeBtn"
      }`}
      style={{
        padding: "3px 11px",
        fontSize: 12,
        fontFamily: "Open Sans",
        textTransform: "lowercase",
        minWidth: "unset",
        backgroundColor: active ? "#EE3D48" : "#f1f2f2",
        color: active ? "#ffffff" : "#131313",
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default RentTimeBtn;
