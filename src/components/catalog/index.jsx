import "./index.scss";
import AsyncSelect from "react-select";
import Card from "./card";

import { useEffect, useReducer } from "react";

import {
  getCards as getCardsAction,
  sortCards as sortCardsAction,
} from "./../../redux/modules/cards";
import { connect } from "react-redux";

const sortOptions = [
  { value: "default", label: "По умолчанию" },
  { value: "cheapFirst", label: "Сначала дешевле" },
  { value: "expensiveFirst", label: "Сначала дороже" },
];

const Catalog = ({ cards, getCards, sortCards }) => {
  useEffect(() => {
    getCards();
  }, []);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleInputChange = (e) => {
    const value = e.value;
    if (
      value === "default" ||
      value === "cheapFirst" ||
      value === "expensiveFirst"
    ) {
      sortCards(value);
      forceUpdate();
    }
  };

  return (
    <section className="catalog">
      <h1 className="catalog__title">Фотобудки</h1>
      <div className="catalog__selection">
        <div className="catalog__selection-title">Сортировка:</div>
        <AsyncSelect
          options={sortOptions}
          defaultValue={sortOptions[0]}
          className="catalog__select-sort"
          classNamePrefix="catalog__select-sort"
          styles={{
            control: (base) => ({
              ...base,
              fontFamily: "Open Sans",
              color: "#939598",
            }),
            menu: (base) => ({
              ...base,
              fontFamily: "Open Sans",
            }),
            indicatorSeparator: (base) => ({
              ...base,
              display: "none",
            }),
          }}
          onChange={handleInputChange}
        />
      </div>
      {cards.map(({ photoes, title, size, price, id }, index) => (
        <Card
          photoes={photoes}
          title={title}
          size={size}
          price={price}
          id={id}
          key={index}
        />
      ))}
    </section>
  );
};

export default connect((state) => ({ cards: state.cards.cards }), {
  getCards: getCardsAction,
  sortCards: sortCardsAction,
})(Catalog);
