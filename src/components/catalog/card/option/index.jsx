import "./index.scss";

import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import { ReactComponent as CheckboxSvg } from "./src/checkbox.svg";
import { ReactComponent as CheckboxCheckedSvg } from "./src/checkbox-checked.svg";

const Option = ({ className, photo, title, price }) => {
  return (
    <div className={`${className} option`}>
      <img src={photo} alt="Дополнительная опция" className="option__img" />
      <h2 className="option__title">{title}</h2>
      <span className="option__price">от {price} ₽</span>
      <Checkbox
        className="option__checkbox"
        icon={<CheckboxSvg className="option__checkbox-svg" />}
        checkedIcon={
          <CheckboxCheckedSvg className="option__checkbox-svg-checked" />
        }
      />
    </div>
  );
};

export default Option;
