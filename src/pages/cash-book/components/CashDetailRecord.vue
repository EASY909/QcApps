<template>
  <nut-popup
    position="bottom"
    closeable
    round
    :style="{ height: '80%', backgroundColor: '#fafafa' }"
    close-icon-position="top-left"
    v-model:visible="popupVisible"
    pop-class="cash-record-pop"
    @click-close-icon="closePopup"
    @click-overlay="closePopup"
  >
    记一笔
    <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="popupVisible"
      :custom-key="customKey"
      confirm-text="确定"
      @close="closePopup"
      :pop-class="popClass"
      v-model:value="keyBoardValue"
    />
  </nut-popup>
</template>
<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { reactive, ref, watch } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits(["update:visible"]);

const popupVisible = useVModel(props, "visible", emit);

const customKey = reactive(["."]);

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
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
.cash-record-pop {
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
  .key-board {
    .key-board-wrapper .finish {
      background-color: $green !important;
    }
  }
  .key-board-light {
    .key-board-wrapper .finish {
      background-color: rgba(61, 183, 120, 0.5) !important;
    }
  }
}
</style>
