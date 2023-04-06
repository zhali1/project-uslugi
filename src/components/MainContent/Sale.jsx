import React from "react";

function Sale() {
  return (
    <section className="sale">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 wow fadeInLeft">
            <h2 className="sale_title">Акция - 60%</h2>
            <p className="sale_subtitle">
              Успей сэкономить на остеклении! Только до 31 декабря!
            </p>
            <div className="timer1" id="timer">
              <h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4>
              <div className="container1">
                <div className="numbers1">
                  <div>
                    <span id="days">08</span>
                  </div>
                  <div className="description1">Дней</div>
                </div>
                <div className="numbers1">
                  <div>
                    <span id="hours">18</span>
                  </div>
                  <div className="description1">Часов</div>
                </div>
                <div className="numbers1">
                  <div>
                    <span id="minutes">33</span>
                  </div>
                  <div className="description1">Минут</div>
                </div>
                <div className="numbers1">
                  <div>
                    <span id="seconds">44</span>
                  </div>
                  <div className="description1">Секунд</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-lg-offset-3 col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2 wow fadeInRight">
            <form className="form main_form" action="#">
              <h2>
                Запишитесь сегодня на <br />
                <span>бесплатный замер</span>
              </h2>
              <input
                className="form-control form_input"
                name="user_name"
                required
                type="text"
                placeholder="Введите ваше имя"
              />
              <input
                className="form-control form_input"
                name="user_phone"
                required
                type="text"
                placeholder="Введите телефон"
              />
              <button
                className="text-uppercase btn-block button"
                name="submit"
                type="submit"
              >
                Вызвать замерщика!
              </button>
              <p className="form_notice">Ваши данные конфиденциальны</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sale;
