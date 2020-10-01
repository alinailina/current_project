import React from "react";
import styles from "./index.module.scss";

import Prince from "./prince";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.textCard}>
        <div>
          <img src={require("../../assets/logo.svg")} alt="" />
        </div>
        <p>
          Думаете, куда деть качественные, но поврежденные текстильные вещи?
        </p>
      </div>
      <div className={styles.textCard}>
        <div>
          <img src={require("../../assets/logo.svg")} alt="" />
        </div>
        <p>
          Мы предлагаем альтернативный экологичный уход полного цикла за
          использованным текстилем.
        </p>
        <p>
          Вы сдаете нам свой использованный текстиль - мы находим ему новое
          применение.
        </p>
        <div>
          <Link to="/shop">Как мы работаем</Link>
        </div>
      </div>
      <div className={styles.img1}></div>
      <div className={styles.textCard}>
        <p>
          Мы переработаем использованный текстиль с применением самых
          инновационных технологий, продлив тем самым его жизненный цикл.
        </p>
        <p>
          Вы получите новые вещи высокого качества из Ваших же текстильных
          материалов!
        </p>
        <Link to="/shop">Перейти в магазин</Link>
      </div>
      <div className={styles.img2}></div>
      <Prince />
      <div className={styles.textCard}>
        <p>
          Ваши клиенты заинтересованы в более экологичных продуктах и услугах, а
          инвесторы все больше ориентируются на социальные и экологические
          показатели компании?{" "}
        </p>{" "}
        <p>
          Вы поставили перед собой задачи по реальному достижению{" "}
          <a
            href="https://www.un.org/sustainabledevelopment/ru/about/development-agenda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Повестки устойчивого развития-2030
          </a>
          ? Тогда мы Ваши единомышленники, союзники и надежные партнеры.
        </p>
        <div>
          <Link to="/about">Подробнее о нас</Link>
          <Link to="/contact">Связаться</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
