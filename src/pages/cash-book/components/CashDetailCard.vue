<template>
  <div class="cash-detail-card">
    <div class="cash-detail-card__header flex-center-between">
      <div class="cash-detail-card__header--time">
        <span class="cash-detail-card__header--time-date mr4 f16-bold"
          >9月3日</span
        >
        <span class="cash-detail-card__header--time-week f16-bold">今天</span>
      </div>
      <div class="cash-detail-card__header--detail">
        <h3 class="cash-detail-card__header--detail-pay">
          <span class="cash-pay f14">出</span>
          <span class="f16-bold ml4">0.00</span>
        </h3>
        <h3 class="cash-detail-card__header--detail-income ml12">
          <span class="cash-income f14">入</span>
          <span class="f16-bold ml4">0.59</span>
        </h3>
      </div>
    </div>
    <div class="cash-detail-card__content flex-center-between">
      <div class="cash-detail-card__content--img">
        <img :src="IncomeImg" />
      </div>
      <div class="cash-detail-card__content--detail">
        <h3 class="f16-bold">退款</h3>
        <p class="f14 flex-center-between">
          <span class="cash-detail--time">03:52</span>
          <span class="ml4 cash-detail--info"
            >南京xxxxxxxxxx公司南京xxxxxxxxxx公司南京xxxxxxxxxx公司</span
          >
        </p>
      </div>
      <div>
        <h2 class="f16-bold mb20">+0.08</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IncomeImg from "@images/income.png";
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.cash-detail-card {
  background-color: $white;
  border-radius: 8px;
  &__header {
    background-color: $bg-white;
    padding: 20px 16px;
    border-radius: 8px;
    &--detail {
      display: flex;
      .cash-pay,
      .cash-income {
        background-color: #ededed;
        color: #7f7f7f;
        padding: 2px;
      }
    }
  }
  &__content {
    padding: 20px 16px;
    &--img img {
      width: 45px;
      height: 45px;
    }
    &--detail {
      margin-left: -10px;
      p {
        color: $font-grown;
        .cash-detail--time {
          display: inline-block;
          &::after {
            display: inline-block;
            content: "|";
            margin-left: 5px;
            transform: scale(0.8);
          }
        }
        .cash-detail--info {
          display: inline-block;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: normal;
          word-break: break-all;
          overflow: hidden;
          width: 150px;
        }
      }
    }
  }
}
</style>
