<template>
  <div class="cash-numberkeyboard">
    <div class="number-board-body">
      <div class="number-board">
        <div
          v-for="item in numberBoard"
          :class="
            item.key === 0
              ? 'key-board-wrapper key-board-wrapper-large'
              : 'key-board-wrapper'
          "
        >
          <div
            class="key"
            :class="item.active ? 'active' : ''"
            :onTouchstart="() => onTouchstart(item)"
            :onTouchend="() => onTouchend(item)"
          >
            {{ item.key }}
          </div>
        </div>
      </div>
      <div class="number-board-sidebar">
        <div
          v-for="item in sidebarBoard"
          :class="
            item.key === 'delete'
              ? 'key-board-wrapper'
              : 'key-board-wrapper key-board-finish'
          "
        >
          <div
            :class="[
              item.key === 'delete' ? 'key' : 'key finish',
              item.active ? 'active' : '',
            ]"
            :onTouchstart="() => onTouchstart(item)"
            :onTouchend="() => onTouchend(item)"
          >
            <img
              v-if="item.key === 'delete'"
              src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
            />
            <span v-if="item.key === 'confirm'">
              确定
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["getMoney"]);

const numberBoard = ref([
  {
    key: 1,
    active: false,
  },
  {
    key: 2,
    active: false,
  },
  {
    key: 3,
    active: false,
  },
  {
    key: 4,
    active: false,
  },
  {
    key: 5,
    active: false,
  },
  {
    key: 6,
    active: false,
  },
  {
    key: 7,
    active: false,
  },
  {
    key: 8,
    active: false,
  },
  {
    key: 9,
    active: false,
  },
  {
    key: 0,
    active: false,
  },
  {
    key: ".",
    active: false,
  },
]);

const sidebarBoard = ref([
  {
    key: "delete",
    active: false,
  },
  {
    key: "confirm",
    active: false,
  },
]);
const money = ref<(number | string)[]>([]);

const onTouchstart = (item: { key: number | string; active: boolean }) => {
  item.active = true;
  if (item.key === "delete") {
    money.value.pop();
    emit("getMoney", money.value.join(""));
    return;
  }
  if (item.key === "confirm") {
    //关闭弹窗
  }
  money.value.push(item.key);
  emit("getMoney", money.value.join(""));
};

const onTouchend = (item) => {
  item.active = false;
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
.cash-numberkeyboard {
  padding: 0 0 22px;
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
  user-select: none;

  .number-board-body {
    display: flex;
    padding: 6px 0 0 6px;
    flex-direction: row;
    height: 100%;
    .number-board {
      display: -webkit-box;
      display: flex;
      flex: 3;
      flex-wrap: wrap;

      .key-board-wrapper {
        position: relative;
        flex: 1;
        flex-basis: 33%;
        box-sizing: border-box;
        padding: 0 6px 6px 0;
        .key {
          &.active {
            background-color: #ebedf0;
          }
          display: flex;
          border-radius: 8px;
          height: 48px;
          font-size: 28px;
          line-height: 1.5;
          color: #333333;
          background-color: $white;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
      }

      .key-board-wrapper-large {
        flex-basis: 66%;
      }
    }

    .number-board-sidebar {
      display: flex;
      flex: 1;
      flex-direction: column;

      .key-board-wrapper {
        position: relative;
        flex: 1;
        box-sizing: border-box;
        padding: 0 6px 6px 0;

        .key {
          &.active {
            background-color: #ebedf0;
          }
          display: flex;
          border-radius: 8px;
          height: 100%;
          font-size: 28px;
          line-height: 1.5;
          color: #333333;
          background-color: $white;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
            height: 24px;
          }
        }
      }

      .key-board-finish {
        position: relative;
        flex: 1;
        box-sizing: border-box;
        padding: 0 6px 6px 0;
        .key.finish {
          font-size: 16px;
          color: #ffffff;
          background-color: $green;
        }
        .key.active {
          background-color: #349a65;
        }
      }
    }
  }
}
</style>
