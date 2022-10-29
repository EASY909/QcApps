<template>
  <div class="cash-button f14">
    <slot />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";
.cash-button {
  display: inline-block;
  padding: 4px 8px;
  background-color: #f7f7f7;
  color: #000;
  border-radius: 2px;
  &.button-green {
    background-color: rgba(61, 183, 120, 0.1);
    color: $green;
  }
  &.button-yellow {
    background-color: rgba(241, 181, 59, 0.1);
    color: $yellow;
  }
  &.button-green {
    background-color: rgba(121, 135, 170, 0.1);
    color: $blue;
  }
  &::after {
    display: inline-block;
    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid $font-grown;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-radius: 2px;
    margin-bottom: 2px;
    margin-left: 5px;
  }
}
</style>
