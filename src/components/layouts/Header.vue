<template>
  <header>
    <!-- Топ бар -->
    <div class="topbar">
      <div class="container topbar-inner">
        <router-link to="/" class="logo">
          <span>inst</span><span class="logo-orange">room</span>
        </router-link>
        <div class="topbar-info">
          <span class="topbar-time">Время работы: 10:00–20:00</span>
          <div>
            <a href="tel:+74955203214" class="topbar-phone">+7 495 320-32-14</a>
            <a href="#" class="topbar-callback">Заказать звонок</a>
          </div>
        </div>
        <div class="topbar-icons">
          <button class="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="icon-btn notif">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span class="notif-dot">4</span>
          </button>
          <router-link to="/profile" class="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </router-link>
          <router-link to="/cart" class="icon-btn cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <div class="cart-label">
              <span>Товаров на сумму</span>
              <b>2 000 Р</b>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Навигация -->
    <nav class="nav">
      <div class="container nav-inner">
        <button class="catalog-btn">☰ Каталог товаров</button>
        <ul class="nav-links">
          <li><router-link to="/about">О компании</router-link></li>
          <li><router-link to="/sales">Акции</router-link></li>
          <li><router-link to="/hits">Хиты сезона</router-link></li>
          <li><router-link to="/news">Новости</router-link></li>
        </ul>
        <div class="nav-socials">
          <a href="#">IG</a><a href="#">VK</a><a href="#">FB</a>
        </div>
        <div class="nav-search">
          <input type="text" placeholder="Поиск по каталогу" />
          <button>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header { background: #212526; color: #fff; }

.topbar { border-bottom: 1px solid #3B3B3B; }
.topbar-inner { display: flex; align-items: center; gap: 20px; padding-top: 10px; padding-bottom: 10px; }
.logo { font-family: 'ProstoOne', sans-serif; font-size: 22px; line-height: 1; display: flex; flex-direction: column; color: #fff; }
.logo-orange { color: #F05A00; }
.topbar-info { flex: 1; font-size: 12px; color: #8A8A8A; display: flex; flex-direction: column; gap: 4px; }
.topbar-phone { color: #fff; font-size: 14px; margin-right: 12px; }
.topbar-callback { color: #F05A00; font-size: 12px; }
.topbar-icons { display: flex; align-items: center; gap: 16px; }
.icon-btn { color: #fff; display: flex; align-items: center; position: relative; }
.notif { position: relative; }
.notif-dot { position: absolute; top: -4px; right: -6px; background: #F05A00; color: #fff; font-size: 9px; width: 14px; height: 14px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.cart-icon { display: flex; align-items: center; gap: 8px; }
.cart-label { display: flex; flex-direction: column; font-size: 11px; line-height: 1.4; }
.cart-label b { color: #F05A00; font-size: 13px; }

.nav { }
.nav-inner { display: flex; align-items: stretch; gap: 0; }
.catalog-btn { background: #F05A00; color: #fff; font-family: 'ProstoOne', sans-serif; font-size: 13px; padding: 0 20px; white-space: nowrap; height: 48px; }
.catalog-btn:hover { background: #FC573B; }
.nav-links { display: flex; margin-left: 16px; }
.nav-links a { display: flex; align-items: center; padding: 0 16px; height: 48px; font-size: 14px; color: #fff; }
.nav-links a:hover { color: #F05A00; }
.nav-socials { display: flex; align-items: center; gap: 10px; margin-left: auto; }
.nav-socials a { color: #8A8A8A; font-size: 12px; font-weight: 500; }
.nav-socials a:hover { color: #fff; }
.nav-search { display: flex; border: 1px solid #3B3B3B; margin-left: 16px; }
.nav-search input { background: transparent; border: none; outline: none; color: #fff; padding: 0 12px; font-size: 13px; width: 180px; }
.nav-search input::placeholder { color: #8A8A8A; }
.nav-search button { background: #F05A00; color: #fff; padding: 0 12px; display: flex; align-items: center; }
</style>