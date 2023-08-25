import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container_footer">
      <div className="first-footer">
        <p>Контакты</p>
        <h5>+7 (705) 777 27 76</h5>
        <h6></h6>
      </div>
      <div className="second-footer">
        <p>Компания 'FIT'</p>
        <ul className="ul-li">
          <li>Зали и студии</li>
          <li>Блог</li>
        </ul>
      </div>
      <div className="third-footer">
        <p>Сотрудничество</p>
        <ul className="ul-li">
          <li>Корпоративным клиентам</li>
          <li>Стать нашим партнером</li>
        </ul>
      </div>
      <div className="fourth-footer">
        <p>Разное</p>
        <ul className="ul-li">
          <li>Публичная оферта</li>
          <li>Правила пользования</li>
          <li>Договор присоединения</li>
          <li>Политика хранения</li>
          <li>Политика уничтожения</li>
          <li>Политика по сбору и обработке персональных данных</li>
        </ul>
      </div>
      <div className="fifth-footer">
        <p>Города</p>
        <ul className="ul-li">
          <li>Бишкек</li>
          <li>Джалал-Абад</li>
          <li>Талас</li>
          <li>Ош</li>
          <li>Чуй</li>
          <li>Нарын</li>
          <li>Иссык-Куль</li>
          <li>Баткен</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
