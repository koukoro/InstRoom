<template>
  <section class="product-section">
    <div class="product-section__head">
      <h2 class="section-title">{{ title }}</h2>
      <div class="product-section__nav">
        <button class="product-section__nav-btn" @click="scroll(-1)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="product-section__nav-btn" @click="scroll(1)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
    <div class="product-section__slider" ref="sliderRef">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="product-section__card"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ui/ProductCard.vue'

defineProps({
  title: { type: String, required: true },
  products: { type: Array, required: true }
})

const sliderRef = ref(null)

function scroll(dir) {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.product-section { margin-bottom: 40px; }
.product-section__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.product-section__nav { display: flex; gap: 8px; }
.product-section__nav-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-light);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.product-section__nav-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
.product-section__slider {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.product-section__slider::-webkit-scrollbar { display: none; }
.product-section__card {
  min-width: 220px;
  flex: 0 0 220px;
  scroll-snap-align: start;
}
</style>