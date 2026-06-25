<template>
  <div class="catalog-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <nav class="breadcrumb">
        <RouterLink to="/">Главная</RouterLink>
        <span class="breadcrumb__sep">/</span>
        <span>Каталог</span>
      </nav>

      <h1 class="catalog-page__title section-title" style="font-size: var(--fs-h1); line-height: var(--lh-h1);">Каталог</h1>

      <!-- Category Tabs -->
      <div class="catalog-page__tabs">
        <button
            v-for="cat in data.categories"
            :key="cat.id"
            class="catalog-page__tab"
            :class="{ 'catalog-page__tab--active': activeCategory === cat.slug }"
            @click="activeCategory = cat.slug"
        >{{ cat.name }}</button>
      </div>

      <!-- Subcategory Grid -->
      <div class="catalog-page__grid" v-if="activeSubs.length > 0">
        <CategoryCard
            v-for="sub in visibleSubs"
            :key="sub.id"
            :name="sub.name"
            :image="sub.image"
            :to="`/catalog/${activeCategory}/${sub.id}`"
        />
      </div>

      <!-- Fallback: direct products if no subs -->
      <div class="catalog-page__grid" v-else>
        <CategoryCard
            v-for="cat in data.categories"
            :key="cat.id"
            :name="cat.name"
            :image="cat.image"
            :to="`/catalog/${cat.slug}`"
        />
      </div>

      <!-- Show more -->
      <div class="catalog-page__more" v-if="hasMore">
        <button class="catalog-page__more-btn" @click="showMore">
          <span class="catalog-page__more-icon">↻</span> Показать ещё
        </button>
      </div>

      <!-- Pagination -->
      <div class="catalog-page__pagination">
        <button class="pagination__btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
            v-for="n in 4"
            :key="n"
            class="pagination__num"
            :class="{ 'pagination__num--active': n === currentPage }"
            @click="currentPage = n"
        >{{ n }}</button>
        <button class="pagination__btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data/products.json'
import CategoryCard from '@/components/ui/CategoryCard.vue'

const route = useRoute()
const currentPage = ref(3)
const pageSize = ref(9)

const activeCategory = ref(route.params.category || data.categories[0].slug)

watch(() => route.params.category, (val) => {
  if (val) activeCategory.value = val
})

const activeSubs = computed(() => data.subcategories[activeCategory.value] || [])

const visibleSubs = computed(() => activeSubs.value.slice(0, pageSize.value))
const hasMore = computed(() => activeSubs.value.length > pageSize.value)

function showMore() {
  pageSize.value += 9
}
</script>

<style scoped>
.catalog-page { padding: 24px 0 64px; background: var(--color-bg); min-height: 100vh; }

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: var(--fs-mini);
  color: var(--color-gray);
}
.breadcrumb a { color: var(--color-gray); }
.breadcrumb a:hover { color: var(--color-primary); }
.breadcrumb__sep { color: var(--color-gray); }

.catalog-page__title { margin-bottom: 24px; }

/* TABS */
.catalog-page__tabs {
  background: var(--color-white);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  overflow: hidden;
}
.catalog-page__tab {
  padding: 14px 24px;
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  font-weight: 500;
  color: var(--color-dark);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
.catalog-page__tab:hover { color: var(--color-primary); }
.catalog-page__tab--active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

/* GRID */
.catalog-page__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

/* SHOW MORE */
.catalog-page__more { text-align: center; margin-bottom: 32px; }
.catalog-page__more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  transition: opacity 0.2s;
}
.catalog-page__more-btn:hover { opacity: 0.75; }
.catalog-page__more-icon { font-size: 18px; color: var(--color-primary); }

/* PAGINATION */
.catalog-page__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.pagination__btn {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-light);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.pagination__btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
.pagination__num {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-light);
  border-radius: 2px;
  font-family: var(--font-body);
  font-size: var(--fs-mini);
  color: var(--color-dark);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.pagination__num:hover { border-color: var(--color-primary); color: var(--color-primary); }
.pagination__num--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
}
</style>