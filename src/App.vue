<template>
  <header class="header">
    <div class="header__container container">
      <HeaderTotal />
    </div>
  </header>
  <main class="main">
    <div class="main__container container">
      <nav class="main__nav nav-main">
        <h5 class="nav-main__title">Главная</h5>
        <ul class="nav-main__list">
          <li class="nav-main__item">Корзина</li>
        </ul>
      </nav>
      <section class="cart">
        <div class="cart__header header-cart">
          <h1 class="header-cart__title">Ваша корзина</h1>
          <span class="header-cart__amount">4 товара</span>
          <button class="header-cart__btn">Очистить корзину</button>
        </div>
        <div class="cart__content content-cart">
          <div class="content-cart__list cart-list">
            <div class="cart-list__item cart-item">
              <div class="cart-item__img">
                <img
                  src="./assets/images/img/G2H.png"
                  alt="G2H"
                  width="100"
                  height="100"
                />
              </div>
              <div class="cart-item__text item-text">
                <h4 class="item-text__title">Вытяжное устройство G2H</h4>
                <p class="item-text__description">
                  12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от
                  датчика присутствия
                </p>
                <p class="item-text__article">Артикул: G2H1065</p>
              </div>
              <div class="cart-item__amount item-amount">
                <button class="item-amount__decrement item-counter"></button>
                <span class="item-amount__count item-counter">1</span>
                <button class="item-amount__increment item-counter"></button>
                <span class="item-amount__price">12 644 ₽/шт.</span>
              </div>
              <div class="cart-item__price">12 644 ₽</div>
              <button class="cart-item__btn"></button>
            </div>
            <div class="cart-list__item cart-item">
              <div class="cart-item__img">
                <img
                  src="./assets/images/img/G2H.png"
                  alt="G2H"
                  width="100"
                  height="100"
                />
              </div>
              <div class="cart-item__text item-text">
                <h4 class="item-text__title">Вытяжное устройство G2H</h4>
                <p class="item-text__description">
                  12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от
                  датчика присутствия
                </p>
                <p class="item-text__article">Артикул: G2H1065</p>
              </div>
              <div class="cart-item__amount item-amount">
                <button class="item-amount__decrement item-counter"></button>
                <span class="item-amount__count item-counter">1</span>
                <button class="item-amount__increment item-counter"></button>
                <span class="item-amount__price">12 644 ₽/шт.</span>
              </div>
              <div class="cart-item__price">12 644 ₽</div>
              <button class="cart-item__btn"></button>
            </div>
            <div class="cart-list__item cart-item">
              <div class="cart-item__img">
                <img
                  src="./assets/images/img/G2H.png"
                  alt="G2H"
                  width="100"
                  height="100"
                />
              </div>
              <div class="cart-item__text item-text">
                <h4 class="item-text__title">Вытяжное устройство G2H</h4>
                <p class="item-text__description">
                  12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от
                  датчика присутствия
                </p>
                <p class="item-text__article">Артикул: G2H1065</p>
              </div>
              <div class="cart-item__amount item-amount">
                <button class="item-amount__decrement item-counter"></button>
                <span class="item-amount__count item-counter">1</span>
                <button class="item-amount__increment item-counter"></button>
                <span class="item-amount__price">12 644 ₽/шт.</span>
              </div>
              <div class="cart-item__price">12 644 ₽</div>
              <button class="cart-item__btn"></button>
            </div>
            <div class="cart-list__service service-cart">
              <label class="service-cart__checkbox">
                <input class="checkbox" type="checkbox" />
              </label>
              <div class="service-cart__img"></div>
              <div class="service-cart__text service-text">
                <h5 class="service-text__title">Установка</h5>
                <p class="service-text__description">
                  Отметьте, если Вам необходима консультация профессионала по
                  монтажу выбранных товаров.
                </p>
              </div>
            </div>
          </div>
          <div class="content-cart__total cart-total">
            <h3 class="cart-total__title">Итого</h3>
            <div class="total-cart">
              <p class="total-cart__text">Сумма заказа</p>
              <span class="total-cart__value">50 576 ₽</span>
            </div>
            <div class="total-cart">
              <p class="total-cart__text">Количество</p>
              <span class="total-cart__value">4 шт</span>
            </div>
            <div class="total-cart total-cart--underline">
              <p class="total-cart__text">Установка</p>
              <span class="total-cart__value">Нет</span>
            </div>
            <div class="total-cart">
              <p class="total-cart__text total-cart__text--bold">
                Стоимость товаров
              </p>
              <span class="total-cart__value total-cart__value--bold">
                50 576 ₽</span
              >
            </div>
            <form class="total-form">
              <button class="total-form__btn">Оформить заказ</button>
              <button class="total-form__btn total-form__btn--empty">
                Купить в 1 клик
              </button>
            </form>
          </div>
        </div>
      </section>
      <section class="slider"></section>
    </div>
  </main>
</template>

<script>
import HeaderTotal from "./components/HeaderTotal.vue";
export default {
  name: "App",
  components: { HeaderTotal },
};
</script>

<style lang="scss"></style>
