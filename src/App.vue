<script setup>
import Header  from '@/components/layouts/Header.vue'
import Footer  from '@/components/layouts/Footer.vue'
import './assets/css/main.css'
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <main>
    <RouterView/>
  </main>
  <Footer />
</template>