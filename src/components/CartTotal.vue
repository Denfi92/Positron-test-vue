<template>
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
      <p class="total-cart__text total-cart__text--bold">Стоимость товаров</p>
      <span class="total-cart__value total-cart__value--bold"> 50 576 ₽</span>
    </div>
    <form class="total-form">
      <button class="total-form__btn">Оформить заказ</button>
      <button class="total-form__btn total-form__btn--empty">
        Купить в 1 клик
      </button>
    </form>
  </div>
</template>
