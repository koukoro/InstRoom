<template>
  <div class="home">
    <!-- HERO BANNER -->
    <section class="hero">
      <div class="hero__grid">

        <!-- Главный слайд -->
        <div class="hero__main">
          <img src="@/assets/images/dewalt.png" alt="DeWALT" class="hero__bg-img" />
          <div class="hero__overlay"></div>
          <div class="hero__main-content">
            <h1 class="hero__title">DeWALT — Инструмент<br/>с настоящим характером</h1>
            <RouterLink to="/catalog" class="btn btn--primary hero__btn">Перейти в каталог</RouterLink>
          </div>
          <button class="hero__arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <!-- Средняя колонка: Акции -->
        <div class="hero__col">
          <img src="@/assets/images/akcii.png" alt="Акции" class="hero__bg-img" />
          <div class="hero__overlay"></div>
          <div class="hero__col-bottom">
            <button class="hero__arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <span class="hero__col-label">Акции</span>
          </div>
        </div>

        <!-- Правая колонка: 2 карточки -->
        <div class="hero__right">
          <div class="hero__right-card">
            <img src="@/assets/images/new-postyplenia.png" alt="Новое поступление" class="hero__bg-img" />
            <div class="hero__overlay"></div>
            <div class="hero__right-content hero__right-content--top">
              <span class="hero__right-label">Новое поступление</span>
              <button class="hero__arrow hero__arrow--sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
          <div class="hero__right-card">
            <img src="@/assets/images/akcii-sverla.png" alt="Акции на сверла" class="hero__bg-img" />
            <div class="hero__overlay"></div>
            <div class="hero__right-content">
              <span class="hero__right-label">Акции на сверла</span>
              <button class="hero__arrow hero__arrow--sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- PRODUCT SECTIONS (2 columns) -->
    <section class="home__products">
      <div class="container">
        <div class="home__products-grid">
          <ProductSection
              v-for="(group, idx) in productGroups"
              :key="idx"
              :title="group.title"
              :products="group.products"
          />
        </div>
      </div>
    </section>

    <!-- BRANDS -->
    <section class="brands">
      <div class="container">
        <h2 class="brands__title">Наши бренды</h2>
        <div class="brands__inner">
          <div class="brands__track" ref="brandsRef">
            <button class="brands__nav-btn" @click="scrollBrands(-1)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div v-for="brand in data.brands" :key="brand.id" class="brands__item">
              <img :src="brand.logo" :alt="brand.name" class="brands__logo-img" />
            </div>
            <button class="brands__nav-btn" @click="scrollBrands(1)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about-section">
      <div class="container about-section__inner">
        <div class="about-section__img img-placeholder">
          <img src="@/assets/images/arms.png" alt="Рукопожатие" />
        </div>
        <div class="about-section__content">
          <h2 class="section-title">О нас</h2>
          <p class="about-section__text">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается от правосубъектности
            лиц, в нём участвующих.
          </p>
          <p class="about-section__text">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается от правосубъектности
            лиц, в нём участвующих. Компания имеет статус юридического лица.
          </p>
          <RouterLink to="/catalog" class="btn btn--dark about-section__btn">Перейти к каталогу</RouterLink>
        </div>
      </div>
    </section>

    <!-- NEWS TABS + SLIDER -->
    <section class="news-section">
      <div class="container">
        <div class="news-section__tabs">
          <button
              v-for="tab in ['Новинки','Акции','Хиты Продаж']"
              :key="tab"
              class="news-section__tab"
              :class="{ 'news-section__tab--active': activeTab === tab }"
              @click="activeTab = tab"
          >{{ tab }}</button>
        </div>
        <div class="news-section__slider-wrap">
          <div class="news-section__slider" ref="newsRef">
            <div v-for="p in featuredProducts" :key="p.id" class="news-section__slide">
              <ProductCard :product="p" />
            </div>
          </div>
        </div>
        <div class="news-section__dots">
          <span v-for="n in 8" :key="n" class="news-section__dot" :class="{ 'news-section__dot--active': n === 1 }"></span>
        </div>
        <div class="news-section__view-all">
          <RouterLink to="/catalog" class="news-section__view-link">Смотреть все</RouterLink>
        </div>
      </div>
    </section>

    <!-- NEWS BLOG -->
    <section class="news-blog">
      <div class="container news-blog__inner">
        <div class="news-blog__left">
          <h2 class="section-title">Новости</h2>
          <p class="news-blog__text">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается от правосубъектности
            лиц, в нём участвующих. Компания имеет статус юридического лица.
          </p>
          <RouterLink to="/news" class="btn btn--primary">Перейти к новостям</RouterLink>
        </div>
        <div class="news-blog__grid">
          <RouterLink
              v-for="article in data.news"
              :key="article.id"
              to="/news"
              class="news-blog__card"
          >
            <div class="news-blog__card-img img-placeholder">
              <img src="@/assets/images/instrumental.png" alt="Инструменты" />
            </div>
            <div class="news-blog__card-body">
              <h3 class="news-blog__card-title">{{ article.title }}</h3>
              <span class="news-blog__card-date">{{ article.date }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import data from '@/data/products.json'
import ProductSection from '@/components/home/ProductSection.vue'
import ProductCard from '@/components/ui/ProductCard.vue'

const brandsRef = ref(null)
const newsRef = ref(null)
const activeTab = ref('Новинки')

function scrollBrands(dir) {
  if (brandsRef.value) brandsRef.value.scrollBy({ left: dir * 200, behavior: 'smooth' })
}
function scrollNews(dir) {
  if (newsRef.value) newsRef.value.scrollBy({ left: dir * 280, behavior: 'smooth' })
}
function nextSlide() {}

const productGroups = computed(() => {
  const cats = data.categories
  return cats.map(cat => ({
    title: cat.name,
    products: data.products.filter(p => p.categoryId === cat.id)
  })).filter(g => g.products.length > 0)
})

const featuredProducts = computed(() => data.products.slice(0, 8))
</script>

<style scoped>
/* HERO */
.hero { padding: 0; }

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 320px 320px;
  height: 340px;
}

/* Общий фон-картинка */
.hero__bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Затемняющий оверлей */
.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

/* --- Главный слайд --- */
.hero__main {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.hero__main-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 8px;
}
.hero__title {
  font-family: var(--font-heading);
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  color: var(--color-white);
}
.hero__btn {
  align-self: flex-start;
  padding: 12px 28px;
  font-size: var(--fs-mini);
}

/* Стрелка — внизу по центру */
.hero__arrow {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 36px;
  height: 36px;
  background: var(--color-primary);
  border-radius: 2px;
  border: none;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s;
}
.hero__arrow:hover { background: var(--color-black); }

.hero__arrow--sm {
  position: static;
  transform: none;
  width: 28px;
  height: 28px;
}

/* --- Средняя колонка --- */
.hero__col {
  position: relative;
  overflow: hidden;
  border-right: 1px solid rgba(255,255,255,0.1);
}
/* Стрелка + лейбл внизу по центру */
.hero__col-bottom {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero__col-label {
  font-family: var(--font-heading);
  font-size: var(--fs-sub-m);
  color: var(--color-white);
}

/* --- Правая колонка --- */
.hero__right {
  display: flex;
  flex-direction: column;
}
.hero__right-card {
  flex: 1;
  position: relative;
  overflow: hidden;
}
.hero__right-card + .hero__right-card {
  border-top: 1px solid rgba(255,255,255,0.15);
}

/* Верхняя карточка: лейбл + стрелка сверху */
.hero__right-content--top {
  position: absolute;
  top: 12px;
  left: 14px;
  right: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Нижняя карточка: лейбл + стрелка снизу */
.hero__right-content {
  position: absolute;
  bottom: 12px;
  left: 14px;
  right: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero__right-label {
  font-family: var(--font-heading);
  font-size: var(--fs-sub-m);
  color: var(--color-white);
}

/* PRODUCTS GRID */
.home__products { padding: 48px 0 0; background: var(--color-bg); }
.home__products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 20px;
}

/* BRANDS */
.brands {
  background: var(--color-darker);
  padding: 40px 0;
}
.brands__title {
  font-family: var(--font-heading);
  font-size: 25px;
  line-height: var(--lh-h2);
  color: var(--color-white);
  margin-bottom: 24px;
}
.brands__inner {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brands__nav-btn {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.brands__nav-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
.brands__track {
  justify-content: space-between;
  display: flex;
  gap: 16px;
  overflow-x: auto;
  flex: 1;
  scrollbar-width: none;
}
.brands__track::-webkit-scrollbar { display: none; }
.brands__item {
  flex-shrink: 0;
  background: var(--color-white);
  border-radius: 4px;
  width: 160px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
}
.brands__logo-img {
  max-width: 100%;
  max-height: 48px;
  object-fit: contain;
}

/* ABOUT */
.about-section { padding: 64px 0; }
.about-section__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.about-section__img {
  height: 360px;
  border-radius: 4px;
}
.about-section__content { display: flex; align-items: flex-start ;flex-direction: column; gap: 20px; }
.about-section__text {
  font-size: var(--fs-para);
  line-height: var(--lh-para);
  color: var(--color-dark);
}

/* NEWS TABS */
.news-section { background: var(--color-darker); padding: 48px 0; }
.news-section__tabs { display: flex; gap: 0; margin-bottom: 32px; }
.news-section__tab {
  padding: 8px 24px;
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  font-weight: 500;
  color: var(--color-light);
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
}
.news-section__tab--active { color: var(--color-white); border-color: var(--color-primary); }
.news-section__slider-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
}
.news-section__nav-btn {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 2px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.2s;
}
.news-section__nav-btn:hover { border-color: var(--color-primary); }
.news-section__slider {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  flex: 1;
  scrollbar-width: none;
}
.news-section__slider::-webkit-scrollbar { display: none; }
.news-section__slide { min-width: 220px; flex: 0 0 220px; }
.news-section__dots {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 24px;
}
.news-section__dot {
  width: 24px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.2);
}
.news-section__dot--active { background: var(--color-primary); }
.news-section__view-all { text-align: right; margin-top: 16px; }
.news-section__view-link { color: var(--color-primary); font-size: var(--fs-mini); font-weight: 500; }

/* NEWS BLOG */
.news-blog { padding: 64px 0; }
.news-blog__inner {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 64px;
  align-items: start;
}
.news-blog__left { display: flex; align-items: flex-start; flex-direction: column; gap: 20px; }
.news-blog__text {
  font-size: var(--fs-para);
  line-height: var(--lh-para);
  color: var(--color-dark);
}
.news-blog__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.news-blog__card { display: block; transition: opacity 0.2s; }
.news-blog__card:hover { opacity: 0.85; }
.news-blog__card-img {
  height: 160px;
  border-radius: 4px;
  margin-bottom: 8px;
}
.news-blog__card-body {}
.news-blog__card-title {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--fs-mini);
  color: var(--color-dark);
  margin-bottom: 4px;
}
.news-blog__card-date {
  font-size: var(--fs-shape);
  color: var(--color-gray);
}
</style>