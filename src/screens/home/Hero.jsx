import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>Fabrevizion</h1>
        <p>Новый взгляд на уход за текстилем</p>
        <div>
          <Link to="/about">Подробнее о нас</Link>
          <Link to="/contact">Связаться</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
