import "./index.scss";
import photo from "./src/photo.png";
import Select from "react-select";
import Card from "./card";

const sortOptions = [
  { value: "default", label: "По умолчанию" },
  { value: "cheapFirst", label: "Сначала дешевле" },
  { value: "expensiveFirst", label: "Сначала дороже" },
];

const Catalog = (props) => {
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
      <Card
        photoes={[photo, photo, photo, photo, photo]}
        title={"Фотобудка с ширмой"}
        size={"2м x 1.5м x 2 м"}
        price={17000}
      />
      <div style={{ height: 500 }}></div>
    </section>
  );
};

export default Catalog;
