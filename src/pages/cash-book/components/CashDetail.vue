<template>
  <div class="cash-detail">
    <div class="cash-detail__header">
      <div
        class="cash-detail__header--type flex-center-between"
        @tap="state.showRound = true"
      >
        <span class="f14">全部类型</span>
        <nut-icon name="category" />
      </div>
      <nut-popup
        position="bottom"
        closeable
        round
        :style="{ height: '60%' }"
        close-icon-position="top-left"
        v-model:visible="state.showRound"
        pop-class="cash-type-pop"
      >
        <div class="cash-type-pop__header f14 pt20 pb20">
          请选择类型
        </div>
        <div class="cash-type-pop__content"></div>
      </nut-popup>
    </div>
    <div class="cash-detail__content">
      <cash-detail-card :cardInfos="cardInfos" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CashDetailCard from "./CashDetailCard.vue";
import { reactive } from "vue";

const state = reactive({
  showRound: false,
});
const cardInfos = reactive({
  cardHeader: {
    date: "9月10日",
    week: "星期日",
    totalPay: "0.50",
    totalIncome: "700.00",
  },
  cardContent: [
    {
      type: "",
      typeDescription: "群红包",
      detailTime: "13:06",
      description: "来自爸爸",
      pay: 50,
    },
  ],
});
console.log(state, "state");
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
.cash-detail {
  &__header {
    width: 100vw;
    background-color: $green;
    padding: 16px;
    &--type {
      width: 100px;
      color: $white;
      padding: 8px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      span {
        &::after {
          content: "";
          display: inline-block;
          width: 1px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.2);
          margin-left: 8px;
        }
      }
    }
  }
  &__content {
    background-color: #ededed;
    padding: 16px;
  }
}
.cash-type-pop {
  border-radius: 8px 8px 0 0 !important;
  &__header {
    text-align: center;
    border-bottom: 1px solid $font-grown;
  }
}
</style>
