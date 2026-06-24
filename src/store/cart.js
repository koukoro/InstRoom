import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        favorites: [],
    }),

    getters: {
        totalPrice(state) {
            return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        },
        totalCount(state) {
            return state.items.reduce((sum, item) => sum + item.quantity, 0)
        }
    },

    actions: {
        addToCart(product) {
            const existing = this.items.find(i => i.id === product.id)
            if (existing) {
                existing.quantity++
            } else {
                this.items.push({ ...product, quantity: 1, inCart: true })
            }
        },

        toggleFavorite(product) {
            const index = this.favorites.findIndex(i => i.id === product.id)
            if (index >= 0) {
                this.favorites.splice(index, 1)
            } else {
                this.favorites.push(product)
            }
        },

        isFavorite(productId) {
            return this.favorites.some(i => i.id === productId)
        },

        isInCart(productId) {
            return this.items.some(i => i.id === productId)
        }
    }
})