<template>
  <div class="home">

    <!-- БАННЕР -->
    <section class="hero">
      <!-- Главный слайд слева -->
      <div class="hero__main">
        <div class="hero__slide-content">
          <h1 class="hero__title">DeWALT – Инструмент с настоящим характером</h1>
          <button class="btn btn--orange">ПЕРЕЙТИ В КАТАЛОГ</button>
        </div>
        <img src="@/assets/img/placeholder.svg" alt="" class="hero__bg-img" />
        <div class="hero__arrows">
          <button class="hero__arrow">&#8592;</button>
          <button class="hero__arrow hero__arrow--active">&#8594;</button>
        </div>
      </div>

      <!-- Правая колонка: 2 карточки -->
      <div class="hero__side">
        <div class="hero__side-card">
          <p class="hero__side-label">Акции</p>
          <img src="@/assets/img/placeholder.svg" alt="Акции" />
          <button class="hero__side-arrow">&#8594;</button>
        </div>
        <div class="hero__side-card">
          <p class="hero__side-label hero__side-label--top-right">Новое поступление</p>
          <img src="@/assets/img/placeholder.svg" alt="Новое поступление" />
          <button class="hero__side-link">Акции на следи!</button>
          <button class="hero__side-arrow">&#8594;</button>
        </div>
      </div>
    </section>

    <!-- КАТЕГОРИИ С ТОВАРАМИ -->
    <div class="container">
      <div class="categories-grid">
        <section
            v-for="category in productsData.categories"
            :key="category.id"
            class="cat-section"
        >
          <div class="cat-section__header">
            <h2 class="cat-section__title">{{ category.name }}</h2>
            <div class="cat-section__nav">
              <button class="nav-btn">&#8249;</button>
              <button class="nav-btn">&#8250;</button>
            </div>
          </div>
          <div class="cat-section__products">
            <ProductCard
                v-for="product in category.products"
                :key="product.id"
                :product="product"
            />
          </div>
        </section>
      </div>
    </div>

    <!-- БРЕНДЫ -->
    <section class="brands">
      <div class="container brands__inner">
        <button class="brands__arrow">&#8249;</button>
        <div class="brands__list">
          <span
              v-for="brand in productsData.brands"
              :key="brand.id"
              class="brands__item"
          >{{ brand.name }}</span>
        </div>
        <button class="brands__arrow">&#8250;</button>
      </div>
    </section>

    <!-- О НАС -->
    <section class="about">
      <div class="container about__inner">
        <div class="about__image">
          <img src="@/assets/img/placeholder.svg" alt="О нас" />
        </div>
        <div class="about__text">
          <h2 class="about__title">О нас</h2>
          <p class="about__desc">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается
            от правосубъектности лиц, в нём участвующих.
          </p>
          <p class="about__desc">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия.
          </p>
          <button class="btn btn--dark">ПЕРЕЙТИ В КАТАЛОГ</button>
        </div>
      </div>
    </section>

    <!-- НОВИНКИ / АКЦИИ / ХИТЫ -->
    <section class="new-section">
      <div class="container">
        <div class="new-section__tabs">
          <button
              class="tab-btn"
              :class="{ active: activeTab === 'new' }"
              @click="activeTab = 'new'"
          >Новинки</button>
          <button
              class="tab-btn"
              :class="{ active: activeTab === 'sales' }"
              @click="activeTab = 'sales'"
          >Акции</button>
          <button
              class="tab-btn"
              :class="{ active: activeTab === 'hits' }"
              @click="activeTab = 'hits'"
          >Хиты Продаж</button>
        </div>

        <div class="new-section__products">
          <ProductCard
              v-for="product in allProducts.slice(0, 4)"
              :key="'tab-' + product.id"
              :product="product"
          />
        </div>

        <div class="new-section__see-all">
          <a href="#" class="see-all">Смотреть все</a>
        </div>
      </div>
    </section>

    <!-- НОВОСТИ -->
    <section class="news">
      <div class="container news__inner">
        <div class="news__left">
          <h2 class="news__title">Новости</h2>
          <p class="news__desc">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается
            от правосубъектности лиц, в нём участвующих. Компания имеет статус юридического лица.
          </p>
          <button class="btn btn--orange">ПЕРЕЙТИ К НОВОСТЯМ</button>
        </div>

        <div class="news__grid">
          <div
              v-for="item in productsData.news"
              :key="item.id"
              class="news__card"
          >
            <div class="news__card-img">
              <img src="@/assets/img/main/news-instrumental.png" :alt="item.title" />
            </div>
            <p class="news__card-title">{{ item.title }}</p>
            <p class="news__card-date">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import productsData from '../data/products.json'

export default {
  name: 'HomePage',
  components: { ProductCard },
  setup() {
    const activeTab = ref('new')

    const allProducts = computed(() => {
      return productsData.categories.flatMap(cat => cat.products)
    })

    return { productsData, activeTab, allProducts }
  }
}
</script>

<style scoped>
/* ========================
   БАННЕР
======================== */
.hero {
  display: flex;
  justify-content: center;
  height: 320px;
  background: var(--color-dark);
}

.hero__main {
  flex: 0 0 60%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding: 40px 48px;
}

.hero__slide-content {
  position: relative;
  z-index: 2;
}

.hero__title {
  font-family: 'ProstoOne', sans-serif;
  font-size: 30px;
  color: var(--color-white);
  line-height: 1.25;
  max-width: 340px;
  margin-bottom: 24px;
}

.hero__bg-img {
  position: absolute;
  right: -20px;
  bottom: 0;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
}

.hero__arrows {
  position: absolute;
  bottom: 20px;
  left: 48px;
  display: flex;
  gap: 8px;
}

.hero__arrow {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--color-gray);
  background: none;
  color: var(--color-white);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.hero__arrow--active,
.hero__arrow:hover {
  background: var(--color-orange);
  border-color: var(--color-orange);
}

/* Правая колонка баннера */
.hero__side {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-gray-dark);
}

.hero__side-card {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--color-gray-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__side-card:last-child {
  border-bottom: none;
}

.hero__side-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.hero__side-label {
  position: absolute;
  top: 10px;
  left: 12px;
  font-family: 'ProstoOne', sans-serif;
  font-size: 13px;
  color: var(--color-white);
  z-index: 2;
}

.hero__side-label--top-right {
  left: auto;
  right: 12px;
}

.hero__side-link {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  font-size: 11px;
  padding: 4px 10px;
  cursor: pointer;
  z-index: 2;
}

.hero__side-arrow {
  position: absolute;
  bottom: 10px;
  left: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-gray);
  background: none;
  color: var(--color-white);
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

/* ========================
   КАТЕГОРИИ
======================== */
.categories-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 40px;
  padding: 36px 0;
}

.cat-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.cat-section__title {
  font-family: 'ProstoOne', sans-serif;
  font-size: 20px;
  color: var(--color-black);
}

.cat-section__nav {
  display: flex;
  gap: 4px;
}

.nav-btn {
  width: 26px;
  height: 26px;
  border: 1px solid var(--color-gray-light);
  background: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}

.nav-btn:hover {
  background: var(--color-orange);
  color: var(--color-white);
  border-color: var(--color-orange);
}

.cat-section__products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

/* ========================
   БРЕНДЫ
======================== */
.brands {
  background: var(--color-dark);
  padding: 28px 0;
}

.brands__inner {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brands__arrow {
  font-size: 24px;
  color: var(--color-white);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-shrink: 0;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.brands__arrow:hover {
  opacity: 1;
}

.brands__list {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
}

.brands__item {
  font-family: 'ProstoOne', sans-serif;
  font-size: 15px;
  color: var(--color-white);
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s;
}

.brands__item:hover {
  color: var(--color-orange);
}

/* ========================
   О НАС
======================== */
.about {
  background: var(--color-light);
  padding: 60px 0;
}

.about__inner {
  display: flex;
  gap: 48px;
  align-items: center;
}

.about__image {
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
}

.about__image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.about__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.about__title {
  font-family: 'ProstoOne', sans-serif;
  font-size: 30px;
  color: var(--color-black);
}

.about__desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--color-gray-dark);
}

/* ========================
   ОБЩИЕ КНОПКИ
======================== */
.btn {
  display: inline-block;
  padding: 12px 28px;
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.5px;
  cursor: pointer;
  border: none;
  transition: background 0.2s;
  border-radius: 5px;
}

.btn--orange {
  background: var(--color-orange);
  color: var(--color-white);
}

.btn--orange:hover {
  background: var(--color-black);
}

.btn--dark {
  background: var(--color-dark);
  color: var(--color-white);
  width: 100%;
  text-align: center;
}

.btn--dark:hover {
  background: var(--color-orange);
}

/* ========================
   НОВИНКИ / АКЦИИ / ХИТЫ
======================== */
.new-section {
  background: var(--color-dark);
  padding: 36px 0 24px;
}

.new-section__tabs {
  display: flex;
  gap: 28px;
  border-bottom: 1px solid var(--color-gray-dark);
  margin-bottom: 20px;
}

.tab-btn {
  font-family: 'ProstoOne', sans-serif;
  font-size: 16px;
  color: var(--color-gray);
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 10px;
  position: relative;
  transition: color 0.2s;
}

.tab-btn.active {
  color: var(--color-white);
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-orange);
}

.new-section__products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.new-section__see-all {
  text-align: right;
  margin-top: 14px;
}

.see-all {
  color: var(--color-orange);
  font-size: 14px;
  text-decoration: none;
}

.see-all:hover {
  color: var(--color-orange-hover);
}

/* ========================
   НОВОСТИ
======================== */
.news {
  padding: 56px 0;
  background: var(--color-white);
}

.news__inner {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.news__left {
  flex: 0 0 240px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news__title {
  font-family: 'ProstoOne', sans-serif;
  font-size: 30px;
  color: var(--color-black);
}

.news__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-gray-dark);
  margin-bottom: 10px;
}

.news__grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.news__card {
  cursor: pointer;
}

.news__card-img {
  height: 150px;
  background: var(--color-light);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}

.news__card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.news__card:hover .news__card-img img {
  transform: scale(1.04);
}

.news__card-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-black);
  margin-bottom: 4px;
}

.news__card-date {
  font-size: 12px;
  color: var(--color-gray);
}
</style>