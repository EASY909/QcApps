<template>
  <div class="index">
    <div class="flex-wrap">
      <div class="book-keeping flex-wrap">
        <div class="img-warp flex-wrap">
          <img :src="BookImg" />
        </div>
        <span>记账</span>
      </div>
      <div class="record flex-wrap">
        <div class="img-warp flex-wrap">
          <img :src="RecordImg" />
        </div>
        <span>记事</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookImg from "../../assets/images/book.png";
import RecordImg from "../../assets/images/record.png";
</script>

<style lang="scss">
.index {
  background-color: #fafafa;
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
  .book-keeping,
  .record {
    width: 40vh;
    height: 20vh;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    .img-warp{
      background-color: #555843;
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }
    span{
      margin-top: 10px;
      font-size: 16px;
    }
  }
  .record {
    margin-top: 10vh;
  }
}
</style>
