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
                ООО «ИРВАС», 127411, г.Москва, Дмитровское шоссе, д.125, корпус
                1
              </p>
              <h3>Фактический адрес:</h3>
              <p>
                ООО «ИРВАС», 141031, МО, Мытищинский р-он,
                п.Вешки,Выставочная,д.53
              </p>
              <h3>Телефон:</h3>
              <p>
                +7 (495) 646-61- 71 <span>(многоканальный)</span>
              </p>
              <h3>E-mail:</h3>
              <a href="mailto:info@irvasokna.ru">info@irvasokna.ru</a>
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
