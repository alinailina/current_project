import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
const Hero1 = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1>FabRevizion</h1>
        <p>Новый взгляд на уход за текстилем</p>
        <div>
          <Link to="/about">Подробнее о нас</Link>
          <Link to="/contact">Контакты</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
