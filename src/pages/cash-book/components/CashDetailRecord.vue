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
    <div class="cash-record-pop__chose">
      <cash-button :color="COLOR.green" @tap="choseRecord">支出 </cash-button>
      <cash-button :color="COLOR.yellow" @tap="choseRecord">入账 </cash-button>
      <cash-button :color="COLOR.blue" @tap="choseRecord"
        >不计入收支
      </cash-button>
    </div>
    <div class="cash-record-pop__keyboard">
      <key-board />
    </div>
  </nut-popup>
</template>
<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { ref, watch } from "vue";
import CashButton from "@/pages/components/CashButton.vue";
import { COLOR } from "@/constants/cash";
import KeyBoard from "./KeyBoard.vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits(["update:visible"]);

const popupVisible = useVModel(props, "visible", emit);

const closePopup = () => {
  popupVisible.value = false;
};
const popClass = ref("key-board");
const keyBoardValue = ref("");

watch(
  keyBoardValue,
  (nv) => {
    if (nv !== "") {
      popClass.value = "key-board";
    } else {
      popClass.value = "key-board-light";
    }
  },
  {
    immediate: true,
  }
);

const choseRecord = (e) => {
  console.log(e);
  e.stopPropagation(); // 阻止冒泡
};
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
    margin: 70px 16px 0 16px;
    .cash-button:not(:last-child) {
      margin-right: 8px;
    }
  }
  &__keyboard {
    height: 40%;
  }
  // .key-board {
  //   .key-board-wrapper .finish {
  //     background-color: $green !important;
  //   }
  // }
  // .key-board-light {
  //   .key-board-wrapper .finish {
  //     background-color: rgba(61, 183, 120, 0.5) !important;
  //   }
  // }
}
</style>
