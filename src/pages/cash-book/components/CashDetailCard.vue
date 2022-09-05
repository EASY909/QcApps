<template>
  <div class="cash-detail-card">
    <div class="cash-detail-card__header flex-center-between">
      <div class="cash-detail-card__header--time">
        <span class="cash-detail-card__header--time-date mr4">9月3日</span>
        <span class="cash-detail-card__header--time-week">今天</span>
      </div>
      <div class="cash-detail-card__header--detail">
        <h3 class="cash-detail-card__header--detail-pay">
          <span>出</span>
          <span>0.00</span>
        </h3>
        <h3 class="cash-detail-card__header--detail-income">
          <span>入</span>
          <span>0.59</span>
        </h3>
      </div>
    </div>
    <div class="cash-detail-card__content">
      退款
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.cash-detail-card {
  background-color: $white;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 24px 16px;
  &__header {
    background-color: $bg-white;
    &--detail {
      display: flex;
    }
  }
}
</style>
