<template>
  <footer class="footer">
    <div class="container footer__inner">

      <div class="footer__col">
        <a href="#" class="footer__link">Малярные товары</a>
        <a href="#" class="footer__link">Электрооборудование</a>
        <a href="#" class="footer__link">Спецодежда</a>
        <a href="#" class="footer__link">Для дома и дачи</a>
        <a href="#" class="footer__link">Сезонное</a>
        <a href="#" class="footer__link">Инструмент</a>
      </div>

      <div class="footer__col">
        <a href="#" class="footer__link">О компании</a>
        <a href="#" class="footer__link">Контакты</a>
        <a href="#" class="footer__link">Новинки</a>
        <a href="#" class="footer__link">Хиты сезона</a>
        <a href="#" class="footer__link">Распродажи</a>
      </div>

      <div class="footer__brand-col">
        <div class="footer__logo">
          <img src="@/assets/img/header/logo.png" alt="Избранное" />
        </div>

        <div class="footer__phones">
          <p>+7 495 120-32-14</p>
          <p>+7 466 120-30-55</p>
        </div>

        <div class="footer__socials">
          <a href="#" class="footer__social-btn">
            <img src="@/assets/img/header/vkontakte.png" alt="ВКонтакте" />
          </a>
          <a href="#" class="footer__social-btn">
            <img src="@/assets/img/header/instagram.png" alt="Instagram" />
          </a>
          <a href="#" class="footer__social-btn">
            <img src="@/assets/img/header/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  display: flex;
  background: var(--color-dark);
  color: white;
  padding-top: 40px;
}

.footer__inner {
  display: flex;
  gap: 263px;
  padding-bottom: 32px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  font-size: 13px;
  color: var(--color-gray);
  transition: color 0.2s;
  text-decoration: none;
}

.footer__link:hover {
  color: var(--color-white);
}

.footer__brand-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.footer__logo {
  font-family: 'ProstoOne', sans-serif;
  line-height: 1;
}

.footer__logo-inst {
  font-size: 20px;
  color: var(--color-white);
  display: block;
}

.footer__logo-room {
  font-size: 20px;
  color: var(--color-orange);
  display: block;
}

.footer__phones {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
}

.footer__phones p {
  font-size: 13px;
  color: var(--color-white);
}

.footer__socials {
  display: flex;
  gap: 8px;
}

.footer__social-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--color-gray-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.footer__social-btn:hover {
  background: var(--color-orange);
}

.footer__social-btn img {
  width: 14px;
  height: 14px;
  object-fit: contain;
  filter: brightness(10);
}

.footer__bottom {
  border-top: 1px solid var(--color-gray-dark);
  padding: 14px 0;
}

.footer__bottom p {
  font-size: 12px;
  color: var(--color-gray);
  text-align: center;
}
</style>