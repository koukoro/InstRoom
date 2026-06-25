<template>
  <div class="home">
    <!-- HERO BANNER -->
    <section class="hero">
      <div class="container hero__inner">
        <!-- Main slide -->
        <div class="hero__main">
          <div class="hero__main-content">
            <h1 class="hero__title">DeWALT — Инструмент<br/>с настоящим характером</h1>
            <RouterLink to="/catalog" class="btn btn--primary hero__btn">Перейти к каталогу</RouterLink>
          </div>
          <div class="hero__main-img img-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <button class="hero__arrow hero__arrow--next" @click="nextSlide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <!-- Side panels -->
        <div class="hero__side">
          <div class="hero__side-card">
            <div class="hero__side-img img-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            </div>
            <div class="hero__side-content">
              <span class="hero__side-label">Акции</span>
              <button class="hero__side-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
          <div class="hero__side-card">
            <div class="hero__side-img img-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            </div>
            <div class="hero__side-content">
              <span class="hero__side-label">Новое поступление</span>
              <RouterLink to="/news" class="hero__side-link">Акции на складе →</RouterLink>
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
      <div class="container brands__inner">
        <button class="brands__nav-btn" @click="scrollBrands(-1)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="brands__track" ref="brandsRef">
          <div v-for="brand in data.brands" :key="brand.id" class="brands__item">
            <div class="brands__logo img-placeholder">{{ brand.name }}</div>
          </div>
        </div>
        <button class="brands__nav-btn" @click="scrollBrands(1)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
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
          <button class="news-section__nav-btn" @click="scrollNews(-1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="news-section__slider" ref="newsRef">
            <div v-for="p in featuredProducts" :key="p.id" class="news-section__slide">
              <ProductCard :product="p" />
            </div>
          </div>
          <button class="news-section__nav-btn" @click="scrollNews(1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
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
.hero { background: var(--color-darker); padding: 0; }
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 0;
  min-height: 300px;
}
.hero__main {
  position: relative;
  padding: 40px 40px 40px 0;
  display: flex;
  align-items: flex-end;
}
.hero__main-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hero__title {
  font-family: var(--font-heading);
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  color: var(--color-white);
}
.hero__main-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.hero__arrow {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 36px;
  height: 36px;
  background: var(--color-primary);
  border-radius: 2px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}
.hero__side {
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(255,255,255,0.1);
}
.hero__side-card {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.hero__side-img {
  width: 100%;
  height: 100%;
  min-height: 130px;
}
.hero__side-content {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
.hero__side-label {
  font-family: var(--font-heading);
  font-size: var(--fs-sub-m);
  color: var(--color-white);
}
.hero__side-arrow {
  width: 28px;
  height: 28px;
  background: var(--color-primary);
  border-radius: 2px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__side-link {
  font-size: var(--fs-shape);
  color: var(--color-primary);
}

/* PRODUCTS GRID */
.home__products { padding: 48px 0 0; background: var(--color-bg); }
.home__products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 60px;
}

/* BRANDS */
.brands {
  background: var(--color-white);
  padding: 32px 0;
  border-top: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-light);
}
.brands__inner {
  display: flex;
  align-items: center;
  gap: 16px;
}
.brands__nav-btn {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark);
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.brands__nav-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
.brands__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  flex: 1;
  scrollbar-width: none;
}
.brands__track::-webkit-scrollbar { display: none; }
.brands__item { flex-shrink: 0; }
.brands__logo {
  width: 140px;
  height: 56px;
  font-family: var(--font-heading);
  font-size: var(--fs-shape);
  color: var(--color-gray);
  border: 1px solid var(--color-light);
  border-radius: 2px;
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