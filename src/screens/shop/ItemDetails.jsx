import React from "react";
import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";
import Slider from "./Slider";

// Styles
import styles from "./index.module.scss";

const FullPost = (props) => {
  const item = props.location.state.item;
  const { title, description, images } = item.fields;

  return (
    <div className={styles.container}>
      <Header title="" />
      <div className={styles.itemDetails}>
        <div>
          <h1>{title}</h1>
          <Slider images={images} />
        </div>

        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>Цена: 12345 ₽</p>
          <div>
            <a href="mailto:info@fabrevizion.ru">Сделать заказ</a>
            <Link to="/shop">Обратно в галерею</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
