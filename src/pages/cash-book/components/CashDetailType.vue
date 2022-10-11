<template>
  <nut-popup
    position="bottom"
    closeable
    round
    :style="{ height: '60%', backgroundColor: '#fafafa' }"
    close-icon-position="top-left"
    v-model:visible="popupVisible"
    pop-class="cash-type-pop"
  >
    <div class="cash-type-pop__header f14 pt20 pb20">
      请选择类型
    </div>
    <div class="cash-type-pop__content">
      <nut-button
        shape="square"
        :class="activeButton.id === 0 ? 'is-active' : ''"
        @tap="tapCashTypeButton(0, '全部类型')"
        >全部类型</nut-button
      >

      <div class="cash-type-pop__content--button">
        <h3 class="mt12 mb8">{{ CASH_TYPE.pay.text }}</h3>
        <div class="cash-type-pop__content--button--wrapper">
          <nut-button
            v-for="items in cashTypeData.pay"
            shape="square"
            :class="activeButton.id === items.id ? 'is-active' : ''"
            @tap="tapCashTypeButton(items.id, items.text)"
            >{{ items.text }}</nut-button
          >
        </div>
      </div>

      <div class="cash-type-pop__content--button">
        <h3 class="mt12 mb8">{{ CASH_TYPE.income.text }}</h3>
        <div class="cash-type-pop__content--button--wrapper">
          <nut-button
            v-for="items in cashTypeData.income"
            shape="square"
            :class="activeButton.id === items.id ? 'is-active' : ''"
            @tap="tapCashTypeButton(items.id, items.text)"
            >{{ items.text }}</nut-button
          >
        </div>
      </div>

      <div class="cash-type-pop__content--button">
        <h3 class="mt12 mb8">{{ CASH_TYPE.notincluded.text }}</h3>
        <div class="cash-type-pop__content--button--wrapper">
          <nut-button
            v-for="items in cashTypeData.notincluded"
            shape="square"
            :class="activeButton.id === items.id ? 'is-active' : ''"
            @tap="tapCashTypeButton(items.id, items.text)"
            >{{ items.text }}</nut-button
          >
        </div>
      </div>
    </div>
  </nut-popup>
</template>
<script setup lang="ts">
import { CASH_TYPE } from "@/constants/cash";
import { reactive } from "vue";
import { getCashType } from "../api/cash-type";
import { ICashTypeResponse } from "@/types/cash";
import { mergeData } from "@/utils/index";
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits(["update:visible", "changeButton"]);

const popupVisible = useVModel(props, "visible", emit);

const activeButton = reactive({
  id: 0,
  text: "全部类型",
});

const tapCashTypeButton = (id: number, text: string) => {
  activeButton.id = id;
  activeButton.text = text;
  emit("changeButton", {
    id,
    text,
  });
  popupVisible.value = false;
};

//type data
const cashTypeData: ICashTypeResponse = reactive({
  income: [],
  pay: [],
  notincluded: [],
});

getCashType().then(({ data }) => {
  mergeData(cashTypeData, data.data);
});
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
.cash-type-pop {
  border-radius: 8px 8px 0 0 !important;
  &__header {
    text-align: center;
    border-bottom: 1px solid $font-grown;
  }
  &__content {
    padding: 24px 16px 16px;
    h3 {
      font-size: 14px;
      color: $font-grown;
    }
    button {
      border: none;
      border-radius: 2px;
      height: 42px;
      &.is-active {
        background-color: $green;
        color: $white;
      }
    }
    &--button {
      button {
        color: $black;
        background-color: $white;
      }
      &--wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 8px;
      }
    }
  }
}
</style>
