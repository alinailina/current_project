import React from "react";
import Item from "./Item";
import styles from "./index.module.scss";

const List = ({ shopItems }) => {
  return (
    <div className={styles.list}>
      {shopItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
    </div>
  );
};

export default List;
