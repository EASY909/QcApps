<template>
  <div class="index f16">
    <div class="flex-wrap">
      <div class="cash-book flex-wrap" @tap="gotoCash">
        <div class="img-warp flex-wrap">
          <img :src="CashBookImg" />
        </div>
        <span>记账</span>
      </div>
      <div class="note-book flex-wrap" @tap="gotoNote">
        <div class="img-warp flex-wrap">
          <img :src="NoteBookImg" />
        </div>
        <span>记事</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CashBookImg from "@images/cash-book.png";
import NoteBookImg from "@images/note-book.png";
import { navigateTo } from "@tarojs/taro";

const gotoCash = () => {
  navigateTo({
    url: "/pages/cash-book/index",
  });
};

const gotoNote = () => {
  console.log("gotoNoteBook");
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.index {
  background-color: $bg-white;
  height: 100vh;
  .flex-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .cash-book,
  .note-book {
    width: 40vh;
    height: 20vh;
    background-color: $white;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;

    .img-warp {
      background-color: $grown;
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }

    span {
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .note-book {
    margin-top: 10vh;
  }
}
</style>
