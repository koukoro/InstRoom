<template>
  <footer>
    <div class="container footer-inner">
      <ul class="footer-col">
        <li><router-link to="/catalog/paint">Малярные товары</router-link></li>
        <li><router-link to="/catalog/electric">Электрооборудование</router-link></li>
        <li><router-link to="/catalog/clothes">Спецодежда</router-link></li>
        <li><router-link to="/catalog/home">Для дома и дачи</router-link></li>
        <li><router-link to="/catalog/season">Сезонное</router-link></li>
        <li><router-link to="/catalog/tools">Инструмент</router-link></li>
      </ul>
      <ul class="footer-col">
        <li><router-link to="/about">О компании</router-link></li>
        <li><router-link to="/contacts">Контакты</router-link></li>
        <li><router-link to="/news">Новости</router-link></li>
        <li><router-link to="/hits">Хиты сезона</router-link></li>
        <li><router-link to="/sales">Распродажи</router-link></li>
      </ul>
      <div class="footer-brand">
        <div class="logo">
          <span>inst</span><span class="logo-orange">room</span>
        </div>
        <a href="tel:+74955203214">+7 495 320-32-14</a>
        <a href="tel:+74665203455">+7 466 320-34-55</a>
        <div class="footer-socials">
          <a href="#">VK</a><a href="#">OK</a><a href="#">FB</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">© Copyright & ООО «Instroom» {{ new Date().getFullYear() }}</div>
    </div>
  </footer>
</template>

<style scoped>
footer { background: #212526; color: #fff; padding: 40px 0 0; }
.footer-inner { display: flex; gap: 60px; }
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-col a { font-size: 13px; color: #8A8A8A; }
.footer-col a:hover { color: #fff; }
.footer-brand { margin-left: auto; display: flex; flex-direction: column; gap: 6px; }
.logo { font-family: 'ProstoOne', sans-serif; font-size: 26px; line-height: 1; display: flex; flex-direction: column; margin-bottom: 6px; }
.logo-orange { color: #F05A00; }
.footer-brand a { font-size: 13px; color: #fff; }
.footer-socials { display: flex; gap: 8px; margin-top: 4px; }
.footer-socials a { font-size: 12px; color: #8A8A8A; border: 1px solid #3B3B3B; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; }
.footer-socials a:hover { color: #fff; border-color: #fff; }
.footer-bottom { border-top: 1px solid #3B3B3B; margin-top: 32px; padding: 14px 0; font-size: 12px; color: #8A8A8A; }
</style>