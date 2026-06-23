<template>
  <div class="card">
    <div class="card-img">
      <span v-if="product.badge" class="badge" :class="product.badge === 'Акция' ? 'badge--red' : 'badge--purple'">
        {{ product.badge }}
      </span>
      <img v-if="product.img" :src="product.img" :alt="product.name" />
    </div>
    <div class="card-body">
      <p class="card-name">{{ product.name }}</p>
      <div class="card-bottom">
        <span class="card-price">{{ product.price }} ₽</span>
        <div class="card-right">
          <span class="card-stock" :class="{ 'out': !product.inStock }">
            {{ product.inStock ? '✓ в наличии' : 'Под заказ' }}
          </span>
          <button class="cart-btn" :class="{ active: inCart }" @click="inCart = !inCart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ product: Object })
const inCart = ref(false)
</script>

<style scoped>
.card { border: 1px solid #DEDBDB; width: 200px; flex-shrink: 0; }
.card-img { background: #F2F5F7; padding: 12px; height: 160px; display: flex; align-items: center; justify-content: center; position: relative; }
.card-img img { max-height: 130px; object-fit: contain; }
.badge { position: absolute; top: 8px; left: 8px; font-family: 'ProstoOne', sans-serif; font-size: 10px; color: #fff; padding: 2px 6px; }
.badge--purple { background: #6B4EFF; }
.badge--red { background: #F05A00; }
.card-body { padding: 8px 10px 10px; }
.card-name { font-size: 12px; line-height: 16px; margin-bottom: 8px; min-height: 32px; }
.card-bottom { display: flex; align-items: center; justify-content: space-between; }
.card-price { font-family: 'ProstoOne', sans-serif; font-size: 16px; }
.card-right { display: flex; align-items: center; gap: 6px; }
.card-stock { font-size: 10px; color: #8A8A8A; }
.card-stock.out { color: #8A8A8A; }
.cart-btn { width: 28px; height: 28px; border: 1px solid #F05A00; color: #F05A00; display: flex; align-items: center; justify-content: center; transition: all .2s; }
.cart-btn:hover, .cart-btn.active { background: #F05A00; color: #fff; }
</style>