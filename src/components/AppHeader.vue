<template>
  <header class="header">
    <!-- Верхняя тёмная полоска -->
    <div class="header-top">
      <div class="container header-top__inner">
        <div class="logo">
          <img src="@/assets/img/header/logo.png" alt="Избранное" />
        </div>

        <span class="header-top__hours">Время работы: 10:00–20:00</span>

        <div class="header-top__contacts">
          <a href="tel:+74951203214" class="header-top__phone">+7 495 120-32-14</a>
          <a href="#" class="header-top__callback">Заказать звонок</a>
        </div>

        <div class="header-top__right">
          <div class="header-top__socials">
            <a href="#"><img src="@/assets/img/header/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="@/assets/img/header/vkontakte.png" alt="ВКонтакте" /></a>
            <a href="#"><img src="@/assets/img/header/facebook.png" alt="Facebook" /></a>
          </div>

          <button class="header-top__icon-btn">
            <img src="@/assets/img/header/like.png" alt="Избранное" />
          </button>
          <button class="header-top__icon-btn">
            <img src="@/assets/img/header/statistic.png" alt="Сравнение" />
          </button>
          <button class="header-top__icon-btn">
            <img src="@/assets/img/header/profile.png" alt="Профиль" />
          </button>

          <button class="header-top__cart">
            <img src="@/assets/img/header/cart.png" alt="Корзина" />
            <div class="header-top__cart-info">
              <span class="header-top__cart-label">Товаров на сумму</span>
              <span class="header-top__cart-price">{{ totalPrice }} ₽</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Нижняя белая часть -->
    <div class="header-bottom">
      <div class="container header-bottom__inner">
        <a href="/" class="header-bottom__logo">
          <span class="logo-inst">inst</span>
          <span class="logo-room">room</span>
        </a>

        <nav class="header-bottom__nav">
          <button class="catalog-btn">
            <img src="@/assets/img/header/list.png" alt="" />
            Каталог товаров
          </button>
          <a href="#" class="header-bottom__link">О компании</a>
          <a href="#" class="header-bottom__link">Акции</a>
          <a href="#" class="header-bottom__link">Хиты сезона</a>
          <a href="#" class="header-bottom__link">Новинки</a>
        </nav>

        <div class="header-bottom__search">
          <input type="text" placeholder="Поиск по каталогу" v-model="searchQuery" />
          <button class="search-btn">
            <img src="@/assets/img/header/search.png" alt="Поиск" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from '../store/cart.js'
import { computed, ref } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const cartStore = useCartStore()
    const searchQuery = ref('')
    const totalPrice = computed(() => cartStore.totalPrice)
    return { totalPrice, searchQuery }
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Верхняя тёмная полоска */
.header-top {
  background: var(--color-dark);
  padding: 8px 0;
}

.header-top__inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header-top__hours {
  font-size: 13px;
  color: white;
  white-space: nowrap;
}

.header-top__contacts {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.header-top__phone {
  font-family: 'ProstoOne', sans-serif;
  font-size: 15px;
  color: var(--color-white);
}

.header-top__callback {
  font-size: 12px;
  color: var(--color-orange);
}

.header-top__callback:hover {
  color: var(--color-orange-hover);
}

.header-top__right {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.header-top__socials {
  display: flex;
  align-items: center;
  gap: 6px;
}

.header-top__socials a {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-gray-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-top__socials img {
  width: 14px;
  height: 14px;
  object-fit: contain;
  filter: brightness(10);
}

.header-top__icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
}

.header-top__icon-btn img {
  width: 26px;
  height: 26px;
  object-fit: contain;
  filter: brightness(10);
  opacity: 0.8;
}

.header-top__icon-btn:hover img {
  opacity: 1;
}

.header-top__cart {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-white);
}

.header-top__cart img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: brightness(10);
}

.header-top__cart-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-top__cart-label {
  font-size: 11px;
  color: var(--color-gray);
  white-space: nowrap;
}

.header-top__cart-price {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-white);
}

/* Нижняя белая часть */
.header-bottom {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray-light);
  padding: 10px 0;
}

.header-bottom__inner {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Логотип текстом как в макете */
.header-bottom__logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-decoration: none;
  font-family: 'ProstoOne', sans-serif;
}

.logo-inst {
  font-size: 18px;
  color: var(--color-black);
}

.logo-room {
  font-size: 18px;
  color: var(--color-orange);
}

.header-bottom__nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.catalog-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-black);
  white-space: nowrap;
}

.catalog-btn img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.header-bottom__link {
  font-size: 14px;
  color: var(--color-black);
  white-space: nowrap;
  transition: color 0.2s;
}

.header-bottom__link:hover {
  color: var(--color-orange);
}

.header-bottom__search {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  overflow: hidden;
  min-width: 220px;
}

.header-bottom__search input {
  flex: 1;
  padding: 8px 12px;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  border: none;
  outline: none;
}

.search-btn {
  padding: 6px 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.search-btn img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}
</style>