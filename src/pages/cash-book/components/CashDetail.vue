<template>
  <div class="cash-detail">
    <div class="cash-detail__header">
      <div
        class="cash-detail__header--type flex-center-between"
        @tap="cashDetailTypeVisible = true"
      >
        <span class="f14">{{ activeButton.text }}</span>
        <nut-icon name="category" />
      </div>
      <!-- 类型 -->
      <cash-detail-type
        v-model:visible="cashDetailTypeVisible"
        @changeButton="getButton"
      />
    </div>
    <div class="cash-detail__content">
      <cash-detail-card :cardInfos="cardInfos" />
      <cash-detail-card :cardInfos="cardInfos" />
      <cash-detail-card :cardInfos="cardInfos" />
      <cash-detail-card :cardInfos="cardInfos" />
      <cash-detail-card :cardInfos="cardInfos" />
      <cash-detail-card :cardInfos="cardInfos" />
    </div>
    <div
      class="cash-detail__record flex-center"
      @tap="cashDetailRecordVisible = true"
    >
      <img :src="RecordImg" class="record-img" />
      <span>记一笔</span>
    </div>
    <!-- 记一笔弹窗 -->
    <cash-detail-record v-model:visible="cashDetailRecordVisible" />
  </div>
</template>

<script setup lang="ts">
import CashDetailCard from "./CashDetailCard.vue";
import { reactive, Ref, ref } from "vue";
import { RecordImg } from "@/constants/image";
import CashDetailType from "./CashDetailType.vue";
import CashDetailRecord from "./CashDetailRecord.vue";

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

const activeButton = reactive({
  id: 0,
  text: "全部类型",
});

const getButton = ({ id, text }) => {
  activeButton.id = id;
  activeButton.text = text;
};

const cashDetailTypeVisible: Ref<boolean> = ref(false);
const cashDetailRecordVisible: Ref<boolean> = ref(false);
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
.cash-detail {
  &__header {
    width: 100vw;
    background-color: $green;
    padding: 16px;
    &--type {
      display: inline-block;
      color: $white;
      padding: 8px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      .nut-icon {
        transform: translateY(3px);
        margin-left: 8px;
      }
      span {
        display: inline-block;
        transform: translateY(-2px);
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
    padding: 8px;
    .cash-detail-card:not(:first-child) {
      margin-top: 8px;
    }
  }
  &__record {
    width: 110px;
    height: 50px;
    position: sticky;
    border-radius: 50px;
    bottom: 100px;
    left: 100vw;
    margin-right: 20px;
    background-color: $white;
    box-shadow: $font-grown 0 0 8px;
    font-size: 14px;
    color: $green;
    .record-img {
      width: 22px;
      height: 22px;
      margin-right: 4px;
    }
  }
}
</style>
