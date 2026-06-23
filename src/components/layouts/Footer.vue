<template>
  <footer class="footer">
    <div class="container footer__inner">
      <!-- Колонка 1: Категории -->
      <div class="footer__col">
        <a href="#" class="footer__link">Малярные товары</a>
        <a href="#" class="footer__link">Электрооборудование</a>
        <a href="#" class="footer__link">Спецодежда</a>
        <a href="#" class="footer__link">Для дома и дачи</a>
        <a href="#" class="footer__link">Сезонное</a>
        <a href="#" class="footer__link">Инструмент</a>
      </div>

      <!-- Колонка 2: Компания -->
      <div class="footer__col">
        <a href="#" class="footer__link">О компании</a>
        <a href="#" class="footer__link">Контакты</a>
        <a href="#" class="footer__link">Новинки</a>
        <a href="#" class="footer__link">Хиты сезона</a>
        <a href="#" class="footer__link">Распродажи</a>
      </div>

      <!-- Колонка 3: Логотип и контакты -->
      <div class="footer__col footer__col--brand">
        <div class="footer__logo">
          <img src="/src/assets/img/header/logo.png" alt="Логотип" />
        </div>

        <div class="footer__phones">
          <a href="tel:+74951203214" class="footer__phone">+7 495 120-32-14</a>
          <a href="tel:+74951203215" class="footer__phone">+7 495 120-32-15</a>
        </div>

        <div class="footer__socials">
          <a href="#" class="footer__social-link">
            <img src="/src/assets/img/header/instagram.png" alt="Instagram" />
          </a>
          <a href="#" class="footer__social-link">
            <img src="/src/assets/img/header/vkontakte.png" alt="VK" />
          </a>
          <a href="#" class="footer__social-link">
            <img src="/src/assets/img/header/facebook.png" alt="Facebook" />
          </a>
        </div>

        <div class="footer__copy">
          <p>Соглашение пользователя</p>
          <p>«Copyright © Название 2023»</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
/* ===== ФУТЕР ===== */
.footer {
  background-color: #212526;
  padding: 40px 0;
  margin-top: auto;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ===== ССЫЛКИ ===== */
.footer__link {
  font-size: 14px;
  color: #DEDBDB;
  transition: color 0.2s;
}

.footer__link:hover {
  color: #FFFFFF;
}

/* ===== ТРЕТЬЯ КОЛОНКА ===== */
.footer__col--brand {
  gap: 16px;
}


.footer__phones {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__phone {
  font-size: 14px;
  color: #DEDBDB;
  transition: color 0.2s;
}

.footer__phone:hover {
  color: #FFFFFF;
}

/* ===== СОЦСЕТИ ===== */
.footer__socials {
  display: flex;
  gap: 10px;
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #3B3B3B;
  transition: all 0.2s;
}

.footer__social-link:hover {
  border-color: #F05A00;
}

.footer__social-link img {
  width: 16px;
  height: 16px;
  display: block;
}

/* ===== КОПИРАЙТ ===== */
.footer__copy {
  font-size: 12px;
  color: #8A8A8A;
  line-height: 1.6;
}

.footer__copy p {
  margin: 0;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer__col--brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }

  .footer {
    padding: 30px 0;
  }
}
</style>