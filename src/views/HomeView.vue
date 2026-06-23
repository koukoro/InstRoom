<template>
  <div>

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-main">
          <h1>DeWALT – Инструмент<br>с настоящим характером</h1>
          <router-link to="/catalog" class="btn-orange">ПЕРЕЙТИ В КАТАЛОГ</router-link>
        </div>
        <div class="hero-side">
          <div class="hero-promo hero-promo-1">
            <span>Акции</span>
            <button class="hero-arrow">›</button>
          </div>
          <div class="hero-promo hero-promo-2">
            <span>Новое поступление</span>
            <small>Акции на слёте</small>
            <button class="hero-arrow">›</button>
          </div>
        </div>
      </div>
    </section>

    <!-- КАТЕГОРИИ ТОВАРОВ (2 колонки) -->
    <section class="products-section">
      <div class="container">
        <div class="categories-grid">
          <div v-for="cat in categories" :key="cat.slug" class="cat-row">
            <div class="cat-header">
              <h2>{{ cat.name }}</h2>
              <div class="cat-nav">
                <button @click="scroll(cat.slug, -1)">‹</button>
                <button @click="scroll(cat.slug, 1)">›</button>
              </div>
            </div>
            <div class="cards-track" :ref="el => tracks[cat.slug] = el">
              <ProductCard v-for="p in byCategory(cat.slug)" :key="p.id" :product="p" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- БРЕНДЫ -->
    <section class="brands">
      <div class="container">
        <h2 class="brands-title">Наши бренды</h2>
        <div class="brands-list">
          <button class="brands-nav" @click="$refs.brandsTrack.scrollBy({left:-300,behavior:'smooth'})">‹</button>
          <div class="brands-track" ref="brandsTrack">
            <div v-for="b in brands" :key="b" class="brand-item">{{ b }}</div>
          </div>
          <button class="brands-nav" @click="$refs.brandsTrack.scrollBy({left:300,behavior:'smooth'})">›</button>
        </div>
      </div>
    </section>

    <!-- О НАС -->
    <section class="about">
      <div class="container about-inner">
        <div class="about-img"></div>
        <div class="about-text">
          <h2>О нас</h2>
          <p>Торговое или промышленное предприятие; торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих.</p>
          <p>Торговое или промышленное предприятие; торгово-промышленное объединение предпринимателей, форма организации предприятия.</p>
          <router-link to="/catalog" class="btn-outline">ПЕРЕЙТИ В КАТАЛОГ</router-link>
        </div>
      </div>
    </section>

    <!-- НОВИНКИ / АКЦИИ / ХИТЫ -->
    <section class="novelties">
      <div class="container">
        <div class="nov-tabs">
          <button v-for="t in ['Новинки','Акции','Хиты Продаж']" :key="t"
                  :class="['nov-tab', { active: activeTab === t }]" @click="activeTab = t">{{ t }}</button>
        </div>
        <div class="nov-wrap">
          <button class="nov-nav" @click="$refs.novTrack.scrollBy({left:-420,behavior:'smooth'})">‹</button>
          <div class="nov-track" ref="novTrack">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
          </div>
          <button class="nov-nav" @click="$refs.novTrack.scrollBy({left:420,behavior:'smooth'})">›</button>
        </div>
        <div class="nov-footer">
          <router-link to="/catalog" class="see-all">Смотреть все</router-link>
        </div>
      </div>
    </section>

    <!-- НОВОСТИ -->
    <section class="news">
      <div class="container news-inner">
        <div class="news-left">
          <h2>Новости</h2>
          <p>Торговое или промышленное предприятие; торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих. Компания имеет статус юридического лица.</p>
          <router-link to="/news" class="btn-orange">ПЕРЕЙТИ К НОВОСТЯМ</router-link>
        </div>
        <div class="news-grid">
          <div v-for="n in newsItems" :key="n.id" class="news-card">
            <div class="news-img"></div>
            <p class="news-title">{{ n.title }}</p>
            <span class="news-date">{{ n.date }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/common/ProductCard.vue'
import products from '@/data/products.json'

const categories = [
  { slug: 'paint',    name: 'Малярные товары' },
  { slug: 'electric', name: 'Электрооборудование' },
  { slug: 'clothes',  name: 'Спецодежда' },
  { slug: 'home',     name: 'Для дома и дачи' },
  { slug: 'season',   name: 'Сезонное' },
  { slug: 'tools',    name: 'Инструмент' },
]

const brands = ['TRUPER', 'ЦЕНТРО', 'FINLAND', 'KAPRO', 'TRUPER', 'ЦЕНТРО']

const newsItems = [
  { id: 1, title: 'Название новости', date: '12 января 2023' },
  { id: 2, title: 'Название новости', date: '12 января 2023' },
  { id: 3, title: 'Название новости', date: '12 января 2023' },
  { id: 4, title: 'Название новости', date: '12 января 2023' },
]

const activeTab = ref('Новинки')
const tracks = ref({})

const byCategory = (slug) => products.filter(p => p.category === slug)
const scroll = (slug, dir) => tracks.value[slug]?.scrollBy({ left: dir * 420, behavior: 'smooth' })
</script>

<style scoped>
/* HERO */
.hero { background: #212526; }
.hero-inner { display: flex; min-height: 280px; gap: 12px; }
.hero-main { flex: 1.5; background: #333 center/cover; padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; gap: 20px; }
.hero-main h1 { font-family: 'ProstoOne', sans-serif; font-size: 28px; color: #fff; line-height: 1.3; }
.btn-orange { background: #F05A00; color: #fff; font-family: 'ProstoOne', sans-serif; font-size: 12px; padding: 12px 24px; display: inline-block; }
.btn-orange:hover { background: #FC573B; }
.btn-outline { border: 1px solid #212526; color: #212526; font-family: 'ProstoOne', sans-serif; font-size: 12px; padding: 12px 24px; display: inline-block; margin-top: 20px; }
.btn-outline:hover { background: #F05A00; border-color: #F05A00; color: #fff; }
.hero-side { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.hero-promo { flex: 1; background: #444; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; }
.hero-promo span { font-family: 'ProstoOne', sans-serif; font-size: 16px; color: #fff; }
.hero-promo small { font-size: 12px; color: #ccc; }
.hero-arrow { align-self: flex-end; background: #F05A00; color: #fff; width: 32px; height: 32px; font-size: 20px; display: flex; align-items: center; justify-content: center; }

/* PRODUCTS */
.products-section { padding: 40px 0; }
.categories-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 40px; }
.cat-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.cat-header h2 { font-family: 'ProstoOne', sans-serif; font-size: 18px; }
.cat-nav { display: flex; gap: 4px; }
.cat-nav button { width: 28px; height: 28px; border: 1px solid #DEDBDB; color: #3B3B3B; font-size: 18px; display: flex; align-items: center; justify-content: center; }
.cat-nav button:hover { border-color: #F05A00; color: #F05A00; }
.cards-track { display: flex; gap: 10px; overflow-x: auto; scrollbar-width: none; }
.cards-track::-webkit-scrollbar { display: none; }

/* BRANDS */
.brands { background: #212526; padding: 32px 0; }
.brands-title { font-family: 'ProstoOne', sans-serif; font-size: 18px; color: #fff; margin-bottom: 16px; }
.brands-list { display: flex; align-items: center; gap: 10px; }
.brands-nav { color: #fff; font-size: 24px; width: 32px; height: 32px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); }
.brands-nav:hover { background: #F05A00; }
.brands-track { display: flex; gap: 16px; overflow-x: auto; scrollbar-width: none; flex: 1; }
.brands-track::-webkit-scrollbar { display: none; }
.brand-item { background: #fff; padding: 14px 24px; font-family: 'ProstoOne', sans-serif; font-size: 13px; color: #212526; white-space: nowrap; }

/* ABOUT */
.about { padding: 60px 0; }
.about-inner { display: flex; gap: 60px; align-items: center; }
.about-img { flex: 1; height: 300px; background: #F2F5F7; }
.about-text { flex: 1; }
.about-text h2 { font-family: 'ProstoOne', sans-serif; font-size: 24px; margin-bottom: 16px; }
.about-text p { color: #3B3B3B; line-height: 20px; margin-bottom: 12px; }

/* NOVELTIES */
.novelties { background: #212526; padding: 40px 0; }
.nov-tabs { display: flex; gap: 0; margin-bottom: 24px; }
.nov-tab { font-family: 'ProstoOne', sans-serif; font-size: 16px; color: #8A8A8A; padding: 8px 24px; border-bottom: 2px solid transparent; }
.nov-tab.active { color: #fff; border-bottom-color: #F05A00; }
.nov-tab:hover { color: #fff; }
.nov-wrap { display: flex; align-items: center; gap: 10px; }
.nov-nav { color: #fff; font-size: 24px; width: 32px; height: 48px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); }
.nov-nav:hover { background: #F05A00; }
.nov-track { display: flex; gap: 10px; overflow-x: auto; scrollbar-width: none; flex: 1; }
.nov-track::-webkit-scrollbar { display: none; }
.nov-footer { text-align: right; margin-top: 12px; }
.see-all { color: #F05A00; font-size: 13px; }

/* NEWS */
.news { padding: 60px 0; }
.news-inner { display: flex; gap: 60px; }
.news-left { flex: 0 0 260px; }
.news-left h2 { font-family: 'ProstoOne', sans-serif; font-size: 24px; margin-bottom: 16px; }
.news-left p { color: #3B3B3B; line-height: 20px; margin-bottom: 20px; }
.news-grid { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.news-img { width: 100%; height: 120px; background: #F2F5F7; }
.news-title { font-family: 'ProstoOne', sans-serif; font-size: 13px; margin: 6px 0 4px; }
.news-date { font-size: 12px; color: #8A8A8A; }
</style>