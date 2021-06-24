import "./index.scss";

const Seo = (props) => {
  return (
    <section className="seo container">
      <h1 className="seo__title">
        <span className="seo__title_red">Фото на</span> праздник
      </h1>
      <p className="seo__text">
        Lorem ipsum dolor sit amet, consectetur
        <span className="seo__text_red">adipiscing elit</span>, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
};

export default Seo;
