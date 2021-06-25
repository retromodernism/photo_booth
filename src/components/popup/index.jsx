import "./index.scss";

const Popup = ({ children, isOpen, close }) => {
  return isOpen ? (
    <div
      className="popup"
      onClick={(e) => {
        // close if clicked on background
        if (e.target.className === "popup") {
          close();
        }
      }}
    >
      {children}
    </div>
  ) : null;
};

export default Popup;
