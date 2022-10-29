<template>
  <nut-popup
    position="bottom"
    closeable
    round
    :style="{
      height: '80%',
      width: '100%',
      backgroundColor: '#fafafa',
    }"
    close-icon-position="top-left"
    v-model:visible="popupVisible"
    pop-class="cash-record-pop"
    @click-close-icon="closePopup"
    @click-overlay="closePopup"
  >
    <div class="cash-record-pop__calendar">
      <cash-button @tap="openSwitch('isVisible')">
        {{ state.choseDate }}
      </cash-button>
      <nut-calendar
        :show-title="false"
        v-model:visible="state.isVisible"
        :is-auto-back-fill="true"
        :default-value="state.defaultDate"
        @close="closeSwitch('isVisible')"
        @choose="setChooseValue"
        :start-date="state.startDate"
        :end-date="state.endDate"
      />
    </div>
    <div class="cash-record-pop__chose">
      <nut-tabs v-model="state.tabValue" color="#3db778" background="#fafafa">
        <nut-tabpane title="支出" placeholder=" ">
          <nut-input v-model="state.money" label="¥" />
        </nut-tabpane>
        <nut-tabpane title="入账" placeholder=" ">
          <nut-input v-model="state.money" label="¥" />
        </nut-tabpane>
        <nut-tabpane title="不计入收支" placeholder=" ">
          <nut-input v-model="state.money" label="¥" />
        </nut-tabpane>
      </nut-tabs>
    </div>
    <div class="cash-record-pop__keyboard">
      <key-board @getMoney="getMoney" />
    </div>
  </nut-popup>
</template>
<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { reactive } from "vue";
import CashButton from "@/pages/components/CashButton.vue";
import KeyBoard from "./KeyBoard.vue";
import dayjs from "dayjs";

const props = defineProps<{
  visible: boolean;
}>();

interface IRecordInfo {
  tabValue: string;
  isVisible: boolean;
  startDate: string;
  endDate: string;
  choseDate: string;
  defaultDate: string;
  money: string;
}
const state: IRecordInfo = reactive({
  tabValue: "0",
  isVisible: false,
  startDate: dayjs(new Date())
    .startOf("year")
    .format("YYYY-MM-DD"),
  endDate: dayjs(new Date()).format("YYYY-MM-DD"),
  choseDate: dayjs(new Date()).format("YYYY年MM月DD日"),
  defaultDate: dayjs(new Date()).format("YYYY-MM-DD"),
  money: "",
});

const emit = defineEmits(["update:visible"]);

const popupVisible = useVModel(props, "visible", emit);

const closePopup = () => {
  popupVisible.value = false;
};

const openSwitch = (param) => {
  state[`${param}`] = true;
};
const closeSwitch = (param) => {
  state[`${param}`] = false;
};

const setChooseValue = (value) => {
  state.defaultDate = value[3];
  state.choseDate = value[0] + "年" + value[1] + "月" + value[2] + "日";
};

function getMoney(value) {
  console.log(value);
  state.money = value;
}
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.cash-record-pop {
  border-radius: 8px 8px 0 0 !important;

  &__header {
    text-align: center;
    border-bottom: 1px solid $font-grown;
  }

  &__chose {
    margin: 0 16px;

    .cash-button:not(:last-child) {
      margin-right: 8px;
    }
    .nut-tabpane {
      height: 200px;
      background-color: $bg-white;
      // background-color: pink;
      padding: 0;
    }
    .nut-input {
      background-color: transparent;
    }
    .nut-input-label {
      width: 30px !important;
      font-size: 20px;
    }
    .nut-input-box {
      font-size: 20px;
    }
  }

  &__keyboard {
    height: 40%;
  }

  &__calendar {
    margin: 35px auto;
    margin-bottom: 0;
    text-align: center;
    .nut-calendar
      .nut-calendar-content
      .calendar-months-panel
      .calendar-month-con
      .calendar-month-item
      .calendar-month-day:nth-child(7n + 0),
    .nut-calendar
      .nut-calendar-content
      .calendar-months-panel
      .calendar-month-con
      .calendar-month-item
      .calendar-month-day:nth-child(7n + 1) {
      color: $green;
    }
    .nut-calendar
      .nut-calendar-content
      .calendar-months-panel
      .calendar-month-con
      .calendar-month-day-active {
      background-color: $green;
    }
    .nut-calendar
      .nut-calendar-header
      .calendar-weeks
      .calendar-week-item:first-of-type,
    .nut-calendar
      .nut-calendar-header
      .calendar-weeks
      .calendar-week-item:last-of-type {
      color: $green;
    }
  }
}
</style>
