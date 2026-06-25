<template>
  <div class="about-page">
    <div class="container">
      <nav class="breadcrumb">
        <RouterLink to="/">Главная</RouterLink>
        <span class="breadcrumb__sep">/</span>
        <span>О компании</span>
      </nav>
      <h1 class="about-page__title">О компании</h1>
      <div class="about-page__content">
        <div class="about-page__img img-placeholder">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div>
          <p class="about-page__text">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается от правосубъектности
            лиц, в нём участвующих.
          </p>
          <p class="about-page__text">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
            форма организации предприятия, при которой его правосубъектность отличается от правосубъектности
            лиц, в нём участвующих. Компания имеет статус юридического лица.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-page { padding: 24px 0 64px; }
.breadcrumb {
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
  font-size: var(--fs-mini); color: var(--color-gray);
}
.breadcrumb a { color: var(--color-gray); }
.breadcrumb a:hover { color: var(--color-primary); }
.breadcrumb__sep { color: var(--color-light); }
.about-page__title {
  font-family: var(--font-heading);
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  margin-bottom: 32px;
}
.about-page__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.about-page__img { height: 360px; border-radius: 4px; }
.about-page__text {
  font-size: var(--fs-para);
  line-height: var(--lh-para);
  color: var(--color-dark);
  margin-bottom: 20px;
}
</style>