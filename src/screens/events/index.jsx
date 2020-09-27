import React from "react";
import styles from "./index.module.scss";
import Header from "../../components/Header";

const Events = () => {
  return (
    <div className={styles.container}>
      <Header title="События" />
      <p>Нет предстоящих событий.</p>
    </div>
  );
};

export default Events;
