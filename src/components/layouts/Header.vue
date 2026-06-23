<template>
  <header class="header">
    <!-- Верхняя полоска -->
    <div class="header-top">
      <div class="container header-top__inner">
        <div class="header-logo">
          <img src="/src/assets/img/header/logo.png" alt="Логотип" />
        </div>

        <div class="header-top__left">
          <span>Время работы: 10:00–20:00</span>
        </div>

        <div class="header-top__center">
          <a href="tel:+74951203214">+7 495 120-32-14</a>
          <button>Заказать звонок</button>
        </div>

        <div class="header-top__right">
          <button class="icon-btn">
            <img src="/src/assets/img/header/like.png" alt="Избранное" />
          </button>
          <button class="icon-btn">
            <img src="/src/assets/img/header/profile.png" alt="Профиль" />
          </button>
          <button class="icon-btn">
            <img src="/src/assets/img/header/statistic.png" alt="Статистика" />
          </button>
          <div class="cart-info">
            <button class="cart-btn">
              <img src="/src/assets/img/header/cart.png" alt="Корзина" />
            </button>
            <div class="cart-sum">
              <span>Товаров на сумму</span>
              <strong>2 000 ₽</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Нижняя полоска с навигацией -->
    <div class="header-bottom">
      <div class="container header-bottom__inner">
        <button class="catalog-btn">
          <img src="/src/assets/img/header/list.png" alt="Каталог" />
          Каталог товаров
        </button>

        <nav class="nav-menu">
          <a href="#">О компании</a>
          <a href="#">Акции</a>
          <a href="#">Хиты сезона</a>
          <a href="#">Новинки</a>
        </nav>

        <div class="socials">
          <a href="#" class="social-link">
            <img src="/src/assets/img/header/vkontakte.png" alt="VK" />
          </a>
          <a href="#" class="social-link">
            <img src="/src/assets/img/header/instagram.png" alt="Instagram" />
          </a>
          <a href="#" class="social-link">
            <img src="/src/assets/img/header/facebook.png" alt="Facebook" />
          </a>
        </div>

        <div class="search">
          <button class="search-btn">
            <img src="/src/assets/img/header/search.png" alt="Поиск" />
          </button>
          <input type="text" placeholder="Поиск по каталогу" />
        </div>

        <button class="burger" @click="mobileOpen = !mobileOpen">
          <span :class="{ open: mobileOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div class="mobile-menu" v-show="mobileOpen">
      <div class="container">
        <nav class="mobile-nav">
          <a href="#" @click="mobileOpen = false">Главная</a>
          <a href="#" @click="mobileOpen = false">Каталог товаров</a>
          <a href="#" @click="mobileOpen = false">О компании</a>
          <a href="#" @click="mobileOpen = false">Акции</a>
          <a href="#" @click="mobileOpen = false">Хиты сезона</a>
          <a href="#" @click="mobileOpen = false">Новинки</a>
        </nav>
        <a href="tel:+74951203214" class="mobile-phone">+7 495 120-32-14</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      mobileOpen: false
    }
  }
}
</script>

<style scoped>
/* ===== ВЕРХНЯЯ ПОЛОСКА ===== */
.header-top {
  background-color: #212526;
  padding: 8px 0;
  border-bottom: 1px solid #3B3B3B;
}

.header-top__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-top__left span {
  color: white;
  font-size: 14px;
}

.header-top__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.header-top__center a {
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
}

.header-top__center a:hover {
  color: #F05A00;
}

.header-top__center button {
  color: #F05A00;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.header-top__center button:hover {
  color: #FC573B;
}

.header-top__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-btn {
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.icon-btn:hover {
  background-color: #F05A00;
}

.icon-btn img {
  width: 24px;
  height: 24px;
  display: block;
}

.cart-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-btn {
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
}

.cart-btn img {
  width: 28px;
  height: 28px;
  display: block;
}

.cart-sum {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cart-sum span {
  color: white;
  font-size: 12px;
}

.cart-sum strong {
  color: #FFFFFF;
  font-size: 16px;
}

/* ===== НИЖНЯЯ ПОЛОСКА ===== */
.header-bottom {
  background-color: #000000;
  padding: 12px 0;
}

.header-bottom__inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  flex-shrink: 0;
}

.logo__inst {
  font-family: 'Prosto One', sans-serif;
  font-size: 18px;
  color: #FFFFFF;
}

.logo__room {
  font-family: 'Prosto One', sans-serif;
  font-size: 18px;
  color: #FFFFFF;
}

.catalog-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid #F05A00;
  background: none;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.catalog-btn:hover {
  background-color: #F05A00;
}

.catalog-btn span {
  width: 18px;
  height: 2px;
  background-color: #FFFFFF;
  display: block;
  margin: 2px 0;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  flex: 1;
}

.nav-menu a {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.2s;
}

.nav-menu a:hover {
  color: #F05A00;
}

.socials {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: opacity 0.2s;
}

.social-link:hover {
  opacity: 0.7;
}

.social-link img {
  width: 20px;
  height: 20px;
  display: block;
}

.search {
  display: flex;
  align-items: center;
  position: relative;
}

.search input {
  background-color: white;
  border: 1px solid #3B3B3B;
  border-radius: 4px;
  padding: 8px 40px 8px 16px;
  color: #000000;
  font-size: 14px;
  width: 220px;
}

.search input::placeholder {
  color: #8A8A8A;
}

.search input:focus {
  border-color: #F05A00;
  outline: none;
}

.search-btn {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
}

.search-btn img {
  width: 20px;
  height: 20px;
  display: block;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  width: 24px;
  height: 2px;
  background-color: #FFFFFF;
  display: block;
  transition: all 0.3s;
  position: relative;
}

.burger span::before,
.burger span::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #FFFFFF;
  transition: all 0.3s;
}

.burger span::before {
  top: -6px;
}

.burger span::after {
  top: 6px;
}

.burger span.open {
  background-color: transparent;
}

.burger span.open::before {
  transform: rotate(45deg);
  top: 0;
}

.burger span.open::after {
  transform: rotate(-45deg);
  top: 0;
}

/* ===== МОБИЛЬНОЕ МЕНЮ ===== */
.mobile-menu {
  background-color: #212526;
  border-top: 1px solid #3B3B3B;
  padding: 20px 0;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.mobile-nav a {
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
}

.mobile-nav a:hover {
  color: #F05A00;
}

.mobile-phone {
  color: #F05A00;
  font-size: 18px;
  font-family: 'Prosto One', sans-serif;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1024px) {
  .header-bottom__inner {
    gap: 16px;
  }

  .nav-menu {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .header-top__left {
    display: none;
  }

  .header-top__center {
    flex-direction: row;
    gap: 12px;
  }

  .header-top__center a {
    font-size: 14px;
  }

  .header-top__center button {
    font-size: 12px;
  }

  .cart-sum {
    display: none;
  }

  .nav-menu {
    display: none;
  }

  .socials {
    display: none;
  }

  .search input {
    width: 160px;
    font-size: 12px;
    padding: 6px 32px 6px 12px;
  }

  .search-btn img {
    width: 16px;
    height: 16px;
  }

  .catalog-btn {
    font-size: 12px;
    padding: 8px 12px;
  }

  .catalog-btn span {
    width: 14px;
  }

  .burger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header-top__center {
    display: none;
  }

  .header-top__right {
    gap: 8px;
  }

  .icon-btn img {
    width: 20px;
    height: 20px;
  }

  .cart-btn img {
    width: 22px;
    height: 22px;
  }

  .logo__inst,
  .logo__room {
    font-size: 14px;
  }

  .search input {
    width: 120px;
    font-size: 11px;
    padding: 5px 28px 5px 10px;
  }

  .search-btn img {
    width: 14px;
    height: 14px;
  }

  .catalog-btn {
    font-size: 11px;
    padding: 6px 10px;
  }
}

.cart-btn:hover {

}
</style>