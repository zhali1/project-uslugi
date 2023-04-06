import React from "react";

function Modals() {
  return (
    <>
      <div className="popup" data-modal>
        <div className="popup_dialog">
          <div className="popup_content text-center">
            <button type="button" className="popup_close">
              <strong>&times;</strong>
            </button>
            <div className="popup_form">
              <form className="form" action="#">
                <h2>
                  Введите ваши данные <br />и нажмите заказать звонок
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
                  Заказать звонок
                </button>
                <p className="form_notice">Перезвоним в течение 10 минут</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Request an engineer --> */}
      <div className="popup_engineer" data-modal>
        <div className="popup_dialog">
          <div className="popup_content text-center">
            <button type="button" className="popup_close">
              <strong>&times;</strong>
            </button>
            <div className="popup_form">
              <form className="form" action="#">
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
      </div>

      {/* <!-- Calculator --> */}
      <div className="popup_calc" data-modal>
        <div className="popup_dialog">
          <div className="popup_calc_content text-center">
            <button type="button" className="popup_calc_close">
              <strong>&times;</strong>
            </button>
            <h2>Калькулятор</h2>
            <h3>
              Выберите форму балкона <br />и укажите размеры
            </h3>
            <div className="balcon_icons">
              <span className="balcon_icons_img do_image_more">
                <img src="assets/img/modal_calc/balkon/ba_01.png" alt="Тип1" />
              </span>
              <span className="balcon_icons_img">
                <img src="assets/img/modal_calc/balkon/ba_02.png" alt="Тип2" />
              </span>
              <span className="balcon_icons_img">
                <img src="assets/img/modal_calc/balkon/ba_03.png" alt="Тип3" />
              </span>
              <span className="balcon_icons_img">
                <img src="assets/img/modal_calc/balkon/ba_04.png" alt="Тип4" />
              </span>
            </div>
            <div className="big_img text-center">
              <img src="assets/img/modal_calc/balkon/type1.png" alt="Тип1" />
              <img src="assets/img/modal_calc/balkon/type2.png" alt="Тип2" />
              <img src="assets/img/modal_calc/balkon/type3.png" alt="Тип3" />
              <img src="assets/img/modal_calc/balkon/type4.png" alt="Тип4" />
            </div>
            <input
              className="form-control"
              id="width"
              type="text"
              placeholder="Ширина"
              required
            />
            <label for="width">мм</label>
            <div className="multiplication">
              <strong>&times;</strong>
            </div>
            <input
              className="form-control"
              id="height"
              type="text"
              placeholder="Высота"
              required
            />
            <label for="height">мм</label>
            <button className="button popup_calc_button">Далее</button>
          </div>
        </div>
      </div>

      <div className="popup_calc_profile" data-modal>
        <div className="popup_dialog">
          <div className="popup_calc_profile_content text-center">
            <button type="button" className="popup_calc_profile_close">
              <strong>&times;</strong>
            </button>
            <h2>Калькулятор</h2>
            <h3>
              Выберите тип остекления <br />и его профиль
            </h3>
            <select className="form-control" name="view" id="view_type">
              <option value="tree">Деревянное остекление</option>
              <option value="aluminum">Алюминиевое остекление</option>
              <option value="plastic">Остекление пластиковыми рамами</option>
              <option value="french">Панорамное остекление</option>
              <option value="overhang">Остекление с выносом</option>
            </select>
            <img src="assets/img/modal_calc/icon_cold.png" alt="" />
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="checkbox-test"
              />
              <span className="checkbox-custom" id="cold"></span>
              <span className="label">Холодное</span>
            </label>
            <img src="assets/img/modal_calc/icon_warm.png" alt="" />
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="checkbox-test"
              />
              <span className="checkbox-custom" id="warm"></span>
              <span className="label">Теплое</span>
            </label>

            <button className="button popup_calc_profile_button">Далее</button>
          </div>
        </div>
      </div>

      <div className="popup_calc_end" data-modal>
        <div className="popup_dialog">
          <div className="popup_content text-center">
            <button type="button" className="popup_calc_end_close">
              <strong>&times;</strong>
            </button>
            <div className="popup_form">
              <form className="form" action="#" data-calc="end">
                <h2>
                  Спасибо за обращение! <br />
                  Оставьте свои данные
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
                  Рассчитать стоимость
                </button>
                <p className="form_notice">Перезвоним в течение 10 минут</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
