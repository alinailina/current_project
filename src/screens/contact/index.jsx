import React from "react";

import Header from "../../components/Header";
import styles from "./index.module.scss";
//import { Link } from "react-router-dom";
import Form from "./Form";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header title="Контакты" />
      <section>
        <p>
          <span>Юридический адрес</span>
          191186, Санкт-Петербург, ул.Б. Конюшенная, д.4–6‑8/А, пом.37‑Н, № 38
        </p>
        <p>
          <span>Телефон для связи</span>
          в России +7 965 753 8688 <br />в Финляндии +358 44 595 6565
        </p>{" "}
        <p>
          <span>Адрес электронной почты</span>
          info@fabrevizion.ru
        </p>
      </section>
      <section>
        <h3>Или воспользуйтесь нашей формой обратной связи:</h3>
        <Form />
      </section>
      <section>
        <h3>Мы в социальных сетях:</h3>
        <ul>
          <li>
            <a href="/">
              <span>
                <img
                  src={require("../../assets/svgs/linkedin.svg")}
                  alt="linkedin-icon"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <img
                  src={require("../../assets/svgs/facebook.svg")}
                  alt="facebook-icon"
                />
              </span>
            </a>
          </li>

          <li>
            <a href="/">
              <span>
                <img
                  src={require("../../assets/svgs/instagram.svg")}
                  alt="instagram-icon"
                />
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
