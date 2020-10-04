import React from "react";
import { Link } from "react-router-dom";

// Children
import Slider from "./Slider";

// Styles
import styles from "./index.module.scss";

const FullPost = (props) => {
  const item = props.location.state.item;
  const { title, description, images } = item.fields;

  return (
    <div className={styles.container}>
      <div className={styles.itemDetails}>
        <div>
          <div className={styles.mobileTitle}>
            <div>
              <img src={require("../../assets/branch3.svg")} alt="" />
            </div>
            <h1>{title}</h1>
            <div>
              <img src={require("../../assets/branch2.svg")} alt="" />
            </div>
          </div>
          <Slider images={images} />
        </div>

        <div>
          <div>
            <div>
              <img src={require("../../assets/branch3.svg")} alt="" />
            </div>
            <h1>{title}</h1>
            <div>
              <img src={require("../../assets/branch2.svg")} alt="" />
            </div>
          </div>

          <p>{description}</p>
          <p>Цена: 12345 руб.</p>
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
