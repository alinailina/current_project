import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

// Children
import Header from "../../components/Header";

const FullPost = (props, location) => {
  const item = props.location.state.item;
  console.log(item);
  const { title, description, images } = item.fields;
  const img1 = images[0].fields.file.url;
  //const img2 = images[1].fields.file.url;
  console.log(location);
  return (
    <div className={styles.container}>
      <Header title="" />
      <div className={styles.itemDetails}>
        <div>
          <h1>{title}</h1>
          <img src={img1} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>Цена: 12345 ₽</p>
          <div>
            <a href="/">Сделать заказ</a>
            <Link to="/shop">Обратно в галерею</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
