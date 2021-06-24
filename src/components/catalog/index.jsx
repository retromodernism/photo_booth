import "./index.scss";
import photo from "./src/photo.png";
import Select from "react-select";
import Card from "./card";

import { useEffect } from "react";

import { getCards as getCardsAction } from "./../../redux/modules/cards";
import { connect } from "react-redux";

const sortOptions = [
  { value: "default", label: "По умолчанию" },
  { value: "cheapFirst", label: "Сначала дешевле" },
  { value: "expensiveFirst", label: "Сначала дороже" },
];

const Catalog = ({ cards, getCards }) => {
  useEffect(() => {
    getCards();
  }, []);

  return (
    <section className="catalog">
      <h1 className="catalog__title">Фотобудки</h1>
      <div className="catalog__selection">
        <div className="catalog__selection-title">Сортировка:</div>
        <Select
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
        />
      </div>
      {cards.map(({photoes, title, size, price, id}, index) => (
        <Card
          photoes={photoes}
          title={title}
          size={size}
          price={price}
          id={id}
          key={index}
        />
      ))}
      <div style={{ height: 500 }}></div>
    </section>
  );
};

export default connect((state) => ({ cards: state.cards.cards }), {
  getCards: getCardsAction,
})(Catalog);
