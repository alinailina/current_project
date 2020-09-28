import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <div>
        <aside>
          <h3>FabRevizion</h3>
          <p>Новый взгляд на уход за текстилем</p>
          <div>
            <ul>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/process">Как мы работаем</Link>
              </li>
              <li>
                <Link to="/principles">Наши принципы</Link>
              </li>
              <li>
                <Link>Полика конфеденциальности</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="shop">Магазин</Link>
              </li>
              <li>
                <Link to="events">События</Link>
              </li>
              <li>
                <Link to="blog">Блог</Link>
              </li>
              <li>
                <Link to="contact">Контакты</Link>
              </li>
            </ul>
          </div>

          <div>
            <p>Мы в социальных сетях:</p>
            <ul>
              <li>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <form>
          <h4>Подпишитесь на нашу рассылку:</h4>
          <div>
            <input type="email" placeholder="Ваша почта" />
            <input type="submit" value="Подписаться" />
          </div>
        </form>
      </div>
      <h5 className="copyright">
        © <span>Fabrevizion</span>, 2020.
      </h5>
    </footer>
  );
};

export default Footer;
