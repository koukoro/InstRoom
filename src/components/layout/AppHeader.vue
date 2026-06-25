<template>
  <!-- Top bar -->
  <header class="header">
    <div class="header__topbar">
      <div class="container header__topbar-inner">
        <RouterLink to="/" class="header__logo">
          <span class="logo-inst">inst</span><br/>
          <span class="logo-room">&#9632;room</span>
        </RouterLink>
        <div class="header__info">
          <span class="header__worktime">Время работы: 10:00–20:00</span>
        </div>
        <div class="header__phone">
          <a href="tel:+74951203214" class="header__phone-num">+7 495 120-32-14</a>
          <a href="#" class="header__callback">Заказать звонок</a>
        </div>
        <div class="header__actions">
          <RouterLink to="/favorites" class="header__action-btn">
            <span class="icon icon-heart"></span>
            <span v-if="cart.favoritesCount" class="header__badge">{{ cart.favoritesCount }}</span>
          </RouterLink>
          <RouterLink to="/compare" class="header__action-btn">
            <span class="icon icon-chart"></span>
            <span v-if="cart.compareCount" class="header__badge">{{ cart.compareCount }}</span>
          </RouterLink>
          <RouterLink to="/account" class="header__action-btn header__action-btn--active">
            <span class="icon icon-user"></span>
          </RouterLink>
          <RouterLink to="/cart" class="header__action-btn">
            <span class="icon icon-cart"></span>
            <span v-if="cart.itemCount" class="header__badge">{{ cart.itemCount }}</span>
          </RouterLink>
          <div class="header__total">
            Корзина товаров<br/>
            <strong>Товаров на сумму {{ cart.totalAmount.toLocaleString('ru') }} ₽</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav bar -->
    <nav class="header__nav">
      <div class="container header__nav-inner">
        <button class="header__catalog-btn btn btn--primary" @click="toggleMenu">
          <span class="icon-menu">☰</span> Каталог товаров
        </button>
        <ul class="header__nav-links">
          <li><RouterLink to="/about">О компании</RouterLink></li>
          <li><RouterLink to="/sales">Акции</RouterLink></li>
          <li><RouterLink to="/hits">Хиты сезона</RouterLink></li>
          <li><RouterLink to="/news">Новинки</RouterLink></li>
        </ul>
        <div class="header__socials">
          <a href="#" class="header__social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="header__social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z"/></svg>
          </a>
          <a href="#" class="header__social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
        <div class="header__search">
          <input type="text" placeholder="Поиск по каталогу" v-model="searchQuery" @input="onSearch" />
          <svg class="header__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <div v-if="searchResults.length > 0 || searchEmpty" class="search-dropdown">
            <div v-if="searchEmpty" class="search-dropdown__empty">Нет результатов</div>
            <ul v-else>
              <li v-for="p in searchResults" :key="p.id" class="search-dropdown__item" @click="goToProduct(p)">
                <img :src="p.image" :alt="p.name" class="search-dropdown__img img-placeholder" />
                <span class="search-dropdown__name">{{ p.name }}</span>
                <span class="search-dropdown__price">{{ p.price }} ₽</span>
              </li>
            </ul>
            <button class="search-dropdown__all" @click="goToCatalog">Показать все</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mega menu -->
    <div class="mega-menu" v-if="menuOpen" @mouseleave="closeMenu">
      <div class="container mega-menu__inner">
        <ul class="mega-menu__categories">
          <li
              v-for="cat in data.categories"
              :key="cat.id"
              class="mega-menu__cat"
              :class="{ 'mega-menu__cat--active': activeCategory === cat.slug }"
              @mouseenter="activeCategory = cat.slug"
          >
            <RouterLink :to="`/catalog/${cat.slug}`" @click="closeMenu">
              {{ cat.name }}
              <span class="mega-menu__arrow">›</span>
            </RouterLink>
          </li>
        </ul>
        <div class="mega-menu__subs" v-if="activeSubs.length">
          <ul class="mega-menu__sub-col">
            <li v-for="sub in activeSubs.slice(0, Math.ceil(activeSubs.length/2))" :key="sub.id">
              <RouterLink to="#" @click="closeMenu">{{ sub.name }}</RouterLink>
            </li>
          </ul>
          <ul class="mega-menu__sub-col">
            <li v-for="sub in activeSubs.slice(Math.ceil(activeSubs.length/2))" :key="sub.id">
              <RouterLink to="#" @click="closeMenu">{{ sub.name }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="mega-menu__subs" v-else>
          <p class="mega-menu__no-sub">Выберите категорию</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
import data from '@/data/products.json'

const cart = useCartStore()
const router = useRouter()

const menuOpen = ref(false)
const activeCategory = ref('')
const searchQuery = ref('')
const searchResults = ref([])
const searchEmpty = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value && data.categories.length) {
    activeCategory.value = data.categories[0].slug
  }
}
function closeMenu() {
  menuOpen.value = false
}

const activeSubs = computed(() => {
  return data.subcategories[activeCategory.value] || []
})

function onSearch() {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) { searchResults.value = []; searchEmpty.value = false; return }
  const found = data.products.filter(p => p.name.toLowerCase().includes(q))
  searchResults.value = found.slice(0, 6)
  searchEmpty.value = found.length === 0
}

function goToProduct(p) {
  searchQuery.value = ''
  searchResults.value = []
  searchEmpty.value = false
  router.push(`/product/${p.slug}`)
}
function goToCatalog() {
  searchQuery.value = ''
  searchResults.value = []
  searchEmpty.value = false
  router.push('/catalog')
}
</script>

<style scoped>
/* ===== TOP BAR ===== */
.header__topbar {
  background: var(--color-darker);
  color: var(--color-white);
}
.header__topbar-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.header__logo {
  font-family: var(--font-heading);
  font-size: 20px;
  line-height: 1.1;
  color: var(--color-white);
  min-width: 60px;
}
.logo-inst { color: var(--color-white); }
.logo-room { color: var(--color-primary); }

.header__info { flex: 1; }
.header__worktime {
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  color: var(--color-light);
}
.header__phone { display: flex; flex-direction: column; gap: 2px; }
.header__phone-num {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--fs-mini);
  color: var(--color-white);
}
.header__callback {
  font-size: var(--fs-shape);
  color: var(--color-primary);
  text-decoration: underline;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header__action-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-white);
  font-size: 20px;
}
.header__action-btn--active {
  background: var(--color-primary);
  border-radius: 2px;
}
.header__badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__total {
  font-size: var(--fs-shape);
  color: var(--color-light);
  line-height: 1.4;
}
.header__total strong { color: var(--color-white); font-size: var(--fs-mini); }

/* Icon placeholders */
.icon { display: inline-block; width: 24px; height: 24px; background: currentColor; mask-size: contain; mask-repeat: no-repeat; mask-position: center; }
.icon-heart { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E"); }
.icon-chart { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cline x1='18' y1='20' x2='18' y2='10'/%3E%3Cline x1='12' y1='20' x2='12' y2='4'/%3E%3Cline x1='6' y1='20' x2='6' y2='14'/%3E%3C/svg%3E"); }
.icon-user { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E"); }
.icon-cart { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Ccircle cx='9' cy='21' r='1'/%3E%3Ccircle cx='20' cy='21' r='1'/%3E%3Cpath d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'/%3E%3C/svg%3E"); }

/* ===== NAV BAR ===== */
.header__nav {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-light);
}
.header__nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.header__catalog-btn {
  min-width: 180px;
  gap: 8px;
  white-space: nowrap;
}
.header__nav-links {
  display: flex;
  gap: 24px;
  flex: 1;
}
.header__nav-links a {
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  font-weight: 500;
  color: var(--color-dark);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.header__nav-links a:hover { color: var(--color-primary); }
.header__socials { display: flex; gap: 8px; }
.header__social { color: var(--color-dark); transition: color 0.2s; }
.header__social:hover { color: var(--color-primary); }

/* ===== SEARCH ===== */
.header__search {
  position: relative;
  min-width: 240px;
}
.header__search input {
  width: 100%;
  padding: 8px 36px 8px 14px;
  border: 1px solid var(--color-light);
  border-radius: 2px;
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  color: var(--color-dark);
  background: var(--color-bg);
  outline: none;
  transition: border-color 0.2s;
}
.header__search input:focus { border-color: var(--color-primary); }
.header__search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray);
}

/* ===== SEARCH DROPDOWN ===== */
.search-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--color-white);
  border: 1px solid var(--color-light);
  border-radius: 2px;
  z-index: 200;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.search-dropdown__empty {
  padding: 16px;
  color: var(--color-gray);
  font-size: var(--fs-mini);
  text-align: center;
}
.search-dropdown__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.15s;
}
.search-dropdown__item:hover { background: var(--color-bg); }
.search-dropdown__img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 2px;
}
.search-dropdown__name { flex: 1; font-size: var(--fs-mini); }
.search-dropdown__price { font-weight: 500; font-size: var(--fs-mini); white-space: nowrap; }
.search-dropdown__all {
  display: block;
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: var(--fs-mini);
  color: var(--color-primary);
  background: var(--color-bg);
  font-family: var(--font-body);
  cursor: pointer;
  border-top: 1px solid var(--color-light);
  transition: background 0.15s;
}
.search-dropdown__all:hover { background: var(--color-light); }

/* ===== MEGA MENU ===== */
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-white);
  z-index: 100;
  border-top: 2px solid var(--color-primary);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.header { position: relative; }
.mega-menu__inner {
  display: flex;
  min-height: 360px;
}
.mega-menu__categories {
  width: 240px;
  flex-shrink: 0;
  background: var(--color-darker);
  padding: 16px 0;
}
.mega-menu__cat a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  color: var(--color-white);
  transition: background 0.15s, color 0.15s;
}
.mega-menu__cat--active a,
.mega-menu__cat a:hover {
  background: var(--color-primary);
  color: var(--color-white);
}
.mega-menu__arrow { font-size: 18px; line-height: 1; }
.mega-menu__subs {
  flex: 1;
  display: flex;
  gap: 0;
  padding: 20px 0;
}
.mega-menu__sub-col {
  flex: 1;
  padding: 0 24px;
}
.mega-menu__sub-col li + li { margin-top: 8px; }
.mega-menu__sub-col a {
  font-size: var(--fs-mini);
  color: var(--color-dark);
  transition: color 0.15s;
}
.mega-menu__sub-col a:hover { color: var(--color-primary); }
.mega-menu__no-sub {
  padding: 24px;
  color: var(--color-gray);
  font-size: var(--fs-mini);
}
</style>