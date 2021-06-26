import "./index.scss";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import { ReactComponent as CheckboxSvg } from "./src/checkbox.svg";
import { ReactComponent as CheckboxCheckedSvg } from "./src/checkbox-checked.svg";

import {
  pickOption as pickOptionAction,
  unpickOption as unpickOptionAction,
} from "./../../../../redux/modules/cards";
import { connect } from "react-redux";

const Option = ({
  className,
  photo,
  title,
  price,
  cardId,
  optionIndex,
  pickOption,
  unpickOption,
}) => {
  return (
    <div className={`${className} option`}>
      <img src={photo} alt="Дополнительная опция" className="option__img" />
      <h2 className="option__title">{title}</h2>
      <span className="option__price">
        от {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
      </span>
      <Checkbox
        className="option__checkbox"
        icon={<CheckboxSvg className="option__checkbox-svg" />}
        checkedIcon={
          <CheckboxCheckedSvg className="option__checkbox-svg-checked" />
        }
        onChange={(e) => {
          const checked = e.target.checked;
          if (checked) {
            pickOption(cardId, optionIndex);
          } else {
            unpickOption(cardId, optionIndex);
          }
        }}
      />
    </div>
  );
};

export default connect(null, {
  pickOption: pickOptionAction,
  unpickOption: unpickOptionAction,
})(Option);
