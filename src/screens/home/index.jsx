import React from "react";
import styles from "./index.module.scss";

import Hero from "./Hero";
import Image from "./Image";
import _4R from "./_4R";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />

      <div className={styles.card}>
        <p>Жалко выбрасывать качественные, но поврежденные текстильные вещи?</p>
      </div>
      <div className={styles.image2}></div>
      <div className={styles.card}>
        <p>
          Мы предлагаем альтернативный экологичный уход полного цикла за
          использованным текстилем.
        </p>
        <p>
          Вы сдаете нам свой использованный текстиль - мы находим ему новое
          применение.
        </p>
        <Link to="/shop">Как мы работаем</Link>
      </div>

      <Image />
      <div className={styles.card}>
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
      <div className={styles.image3}></div>
      <_4R />
      <div className={styles.end}>
        <p>
          Если ваши клиенты заинтересованы в более экологичных услугах и
          продуктах, инвесторы все больше проверяют социальные и экологические
          показатели компании,а вы поставили перед собой амбициозные задачи по
          реальному достижению{" "}
          <a
            href="https://www.un.org/sustainabledevelopment/ru/about/development-agenda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Повестки устойчивого развития-2030
          </a>
          , тогда мы Ваши единомышленники, союзники и надежные партнеры.
        </p>

        <p>
          Мы стремимся к рентабельному, взаимовыгодному и честному партнерству в
          бизнесе. Вместе мы сможем достичь устойчивого развития, минимизировав
          наше наше воздействие на окружающую среду в полном соответствии с
          Европейским зеленым курсом.
        </p>
      </div>

      <Link to="/contact">Связаться с нами</Link>
    </div>
  );
};

export default Home;
