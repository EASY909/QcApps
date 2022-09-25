<template>
  <div class="cash-detail-card">
    <div class="cash-detail-card__header flex-center-between">
      <div class="cash-detail-card__header--time">
        <span class="cash-detail-card__header--time-date mr4 f14">
          {{ props.cardInfos.cardHeader.date }}
        </span>
        <span class="cash-detail-card__header--time-week f14">
          {{ props.cardInfos.cardHeader.week }}
        </span>
      </div>
      <div class="cash-detail-card__header--detail flex-center">
        <h3 class="cash-detail-card__header--detail-pay flex-center">
          <span class="cash-pay f14">出</span>
          <span class="f14 ml4">
            {{ props.cardInfos.cardHeader.totalPay }}
          </span>
        </h3>
        <h3 class="cash-detail-card__header--detail-income ml16 flex-center">
          <span class="cash-income f14">入</span>
          <span class="f14 ml4">
            {{ props.cardInfos.cardHeader.totalIncome }}
          </span>
        </h3>
      </div>
    </div>
    <div
      class="cash-detail-card__content flex-center-start"
      v-for="(content, index) in props.cardInfos.cardContent"
      :key="index"
    >
      <div class="cash-detail-card__content--img">
        <!-- TODO: change different img -->
        <img :src="IncomeImg" />
      </div>
      <div class="cash-detail-card__content--detail flex-center-between">
        <div>
          <h3 class="f14">{{ content.typeDescription }}</h3>
          <p class="f14 flex-center-between">
            <span class="cash-detail--time">
              {{ content.detailTime }}
            </span>
            <span class="ml4 cash-detail--info">
              {{ content.description }}
            </span>
          </p>
        </div>
        <h2
          class="f16-bold mb16"
          :class="content.pay >= 0 ? 'cash-income' : 'cash-pay'"
        >
          {{ content.pay >= 0 ? `+${content.pay}` : `-${content.pay}` }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IncomeImg } from "@/constants/image";

const props = defineProps({
  cardInfos: {
    type: Object,
    required: true,
    default: () => {
      return {
        cardHeader: {
          date: "",
          week: "",
          totalPay: "",
          totalIncome: "",
        },
        cardContent: [
          {
            type: "",
            typeDescription: "",
            detailTime: "",
            description: "",
            pay: 0,
          },
        ],
      };
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.cash-detail-card {
  background-color: $white;
  border-radius: 8px;
  > div:not(:last-child) {
    .cash-detail-card__content--detail {
      border-bottom: 1px solid $font-grown;
    }
  }
  > div:last-child {
    padding-bottom: 10px;
  }
  &__header {
    background-color: $bg-white;
    padding: 20px 16px;
    border-radius: 8px;
    &--time {
      span {
        display: inline-block;
      }
    }

    &--detail-pay,
    &--detail-income {
      .cash-pay,
      .cash-income {
        background-color: #ededed;
        color: #7f7f7f;
        padding: 2px;
      }
    }
  }
  &__content {
    padding: 10px 10px 0;
    &--img img {
      width: 45px;
      height: 45px;
    }
    &--detail {
      margin-left: 10px;
      padding-bottom: 5px;
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
          width: 160px;
        }
      }
    }

    .cash-income {
      color: $yellow;
    }
    .cash-pay {
      color: $black;
    }
  }
}
</style>
