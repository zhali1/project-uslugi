import React from "react";

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="section_header">
          <h2>Как нас найти</h2>
          <div className="section_header_sub"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 wow fadeInLeft">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1462.0291039088593!2d74.58472726954669!3d42.87161555291707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d04d040001%3A0x435e5287f35c7d3c!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyBNYWtlcnMgQ29kaW5nIEJvb3RjYW1w!5e0!3m2!1sru!2skg!4v1680722435992!5m2!1sru!2skg"
              width="550"
              height="450"
              style={{ border: "0" }}
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 wow fadeInRight">
            <div className="contacts_info">
              <h3>Юридический адрес:</h3>
              <p>
                ОcОО «Romance», 127411, г.Бишкек район: Арча-Бешик, Нур-Эль №78
              </p>
              <h3>Фактический адрес:</h3>
              <p>
                ОcОО «Romance», 127411, г.Бишкек, пр. Чынгыз Айтматова 299/3 кв
                87
              </p>
              <h3>Телефон:</h3>
              <p>+996 (704) 41-26-30</p>
              <h3>E-mail:</h3>
              <a href="/">erzat030699@gmail.com</a>
              <h3>Режим работы:</h3>
              <p>9:00 - 18:00 без выходных</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
