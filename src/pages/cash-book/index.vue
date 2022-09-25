<template>
  <div class="cash-index">
    <cash-detail v-if="cashPage === CASH_PAGE.Detail" />
    <cash-total v-if="cashPage === CASH_PAGE.Total" />
    <cash-setting v-if="cashPage === CASH_PAGE.Setting" />
    <nut-tabbar
      @tab-switch="tabSwitch"
      unactive-color="#3b3b3b"
      active-color="#3db778"
      :safe-area-inset-bottom="true"
      :bottom="true"
    >
      <nut-tabbar-item
        tab-title="明细"
        :img="DetailImg"
        :activeImg="DetailSelectorImg"
      />
      <nut-tabbar-item
        tab-title="统计"
        :img="TotalImg"
        :activeImg="TotalSelectorImg"
      />
      <nut-tabbar-item
        tab-title="设置"
        :img="SettingImg"
        :activeImg="SettingSelectorImg"
      />
    </nut-tabbar>
  </div>
</template>

<script setup lang="ts">
import {
  DetailImg,
  DetailSelectorImg,
  TotalImg,
  TotalSelectorImg,
  SettingImg,
  SettingSelectorImg,
} from "@/constants/image";
import { ref } from "vue";
import { CASH_PAGE } from "@/constants/cash";
import CashDetail from "./components/CashDetail.vue";
import CashTotal from "./components/CashTotal.vue";
import CashSetting from "./components/CashSetting.vue";

const cashPage = ref<number>(CASH_PAGE.Detail);

function tabSwitch(_: any, index: number) {
  cashPage.value = index;
}
</script>
