<template>
  <div class="card">
    <span v-if="product.badge" class="card__badge" :class="badgeClass">
      {{ product.badge }}
    </span>

    <div class="card__actions-top">
      <button class="card__icon-btn" @click="toggleCompare">
        <img src="@/assets/img/header/statistic.png" alt="Сравнить" />
      </button>
      <button class="card__icon-btn" :class="{ active: isFav }" @click="toggleFavorite">
        <img src="@/assets/img/header/like.png" alt="Избранное" />
      </button>
    </div>

    <div class="card__image-wrap">
      <img
          :src="product.image"
          :alt="product.name"
          class="card__image"
          @error="onImgError"
      />
    </div>

    <p class="card__name">{{ product.name }}</p>

    <div class="card__bottom">
      <div class="card__prices">
        <span class="card__price">{{ product.price }} ₽</span>
        <span v-if="product.oldPrice" class="card__old-price">{{ product.oldPrice }} ₽</span>
      </div>

      <div class="card__row">
        <span v-if="product.inStock" class="card__in-stock">✓ в наличии</span>
        <span v-else class="card__out-stock">под заказ</span>

        <button
            class="card__cart-btn"
            :class="{ 'in-cart': isCart }"
            @click="handleCart"
        >
          <img
              v-if="!isCart"
              src="@/assets/img/header/cart.png"
              alt="В корзину"
              class="card__cart-icon"
          />
          <img
              v-else
              src="@/assets/img/header/cart.png"
              alt="В корзине"
              class="card__cart-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store/cart.js'
import { computed } from 'vue'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const cartStore = useCartStore()

    const isFav = computed(() => cartStore.isFavorite(props.product.id))
    const isCart = computed(() => cartStore.isInCart(props.product.id))

    const badgeClass = computed(() => {
      if (props.product.badge === 'Акция') return 'badge--sale'
      return 'badge--new'
    })

    function toggleFavorite() {
      cartStore.toggleFavorite(props.product)
    }

    function toggleCompare() {}

    function handleCart() {
      if (!isCart.value) {
        cartStore.addToCart(props.product)
      }
    }

    function onImgError(e) {
      e.target.style.display = 'none'
    }

    return { isFav, isCart, badgeClass, toggleFavorite, toggleCompare, handleCart, onImgError }
  }
}
</script>

<style scoped>
.card {
  background: var(--color-white);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: box-shadow 0.2s;
  min-width: 0;
}

.card:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

/* Бейдж */
.card__badge {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'ProstoOne', sans-serif;
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 2px;
  z-index: 2;
  text-transform: uppercase;
}

.badge--new {
  background: var(--color-dark);
  color: var(--color-white);
}

.badge--sale {
  background: var(--color-orange);
  color: var(--color-white);
}

/* Иконки сверху справа */
.card__actions-top {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 2;
}

.card__icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
}

.card__icon-btn img {
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.3;
  transition: opacity 0.2s, filter 0.2s;
}

.card__icon-btn:hover img,
.card__icon-btn.active img {
  filter: none;
  opacity: 1;
}

/* Картинка товара */
.card__image-wrap {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-light);
  border-radius: 4px;
  overflow: hidden;
}

.card__image {
  max-height: 110px;
  max-width: 100%;
  object-fit: contain;
}

/* Название */
.card__name {
  font-size: 12px;
  color: var(--color-black);
  line-height: 1.4;
  flex: 1;
}

/* Нижний блок */
.card__bottom {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card__prices {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.card__price {
  font-family: 'ProstoOne', sans-serif;
  font-size: 16px;
  color: var(--color-black);
}

.card__old-price {
  font-size: 12px;
  color: var(--color-gray);
  text-decoration: line-through;
}

.card__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.card__in-stock {
  font-size: 12px;
  color: #5BAC5B;
}

.card__out-stock {
  font-size: 12px;
  color: var(--color-gray);
}

/* Кнопка корзины */
.card__cart-btn {
  width: 36px;
  height: 36px;
  border: 2px solid var(--color-orange);
  border-radius: 4px;
  background: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
}

.card__cart-btn:hover {
  background: var(--color-orange);
}

.card__cart-btn:hover .card__cart-icon {
  filter: brightness(10);
}

.card__cart-btn.in-cart {
  background: var(--color-orange);
}

.card__cart-btn.in-cart .card__cart-icon {
  filter: brightness(10);
}

.card__cart-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}
</style>