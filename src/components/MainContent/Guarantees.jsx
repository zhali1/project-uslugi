import React from "react";

function Guarantees() {
  return (
    <section className="guarantees">
      <div className="container">
        <div className="section_header guarantees_header">
          <h2>мы гарантируем вам</h2>
          <div className="section_header_sub guarantees_header_sub"></div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-6 text-center wow fadeInUp">
            <div className="guarantees_block">
              <img src="assets/img/guarantees/1.png" alt="#" />
              <h3>Высокое качество</h3>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 col-xs-6 text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="guarantees_block">
              <img src="assets/img/guarantees/2.png" alt="" />
              <h3>
                Выполнение работ <br />
                под ключ
              </h3>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 col-xs-6 text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="guarantees_block">
              <img src="assets/img/guarantees/3.png" alt="" />
              <h3>
                Монтаж в короткие <br />
                сроки
              </h3>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 col-xs-6 text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="guarantees_block">
              <img src="assets/img/guarantees/4.png" alt="" />
              <h3>
                Цены <br />
                от производителя
              </h3>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 col-xs-6 text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="guarantees_block">
              <img src="assets/img/guarantees/5.png" alt="" />
              <h3>
                Бесплатный замер <br />и консультацию
              </h3>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 col-xs-6 text-center wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="guarantees_block">
              <img src="assets/img/guarantees/6.png" alt="" />
              <h3>
                Тепло и уют <br />
                на балконе
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guarantees;
