import React from "react";

import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

const _4R = () => {
  return (
    <div className={styles.principles}>
      <div>
        <h4>
          Вместе с Вами мы создаем новую модель бизнеса, которая соответствует
          принципам 4R:
        </h4>
        <ul>
          <li>
            <div>
              <img src={require("../../assets/recycle.svg")} alt="" />
            </div>

            <span>reduce</span>
            <p>уменьшение использования первичного хлопка</p>
          </li>
          <li>
            <div>
              <img src={require("../../assets/recycle.svg")} alt="" />
            </div>
            <span>reuse</span>
            <p>новое применение использованному текстилю</p>
          </li>
          <li>
            <div>
              <img src={require("../../assets/recycle.svg")} alt="" />
            </div>
            <span>recycle</span>
            <p>придание новых качеств старому текстилю (upcycling)</p>
          </li>
          <li>
            <div>
              <img src={require("../../assets/recycle.svg")} alt="" />
            </div>
            <span>recover</span>
            <p>
              восстановление текстильного волокна с помощью передовых технологий
            </p>
          </li>
        </ul>{" "}
        <Link to="principles">Наши принципы</Link>
      </div>
    </div>
  );
};

export default _4R;
