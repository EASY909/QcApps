<template>
  <div class="cash-button f14">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<style lang="scss">
.cash-button {
  display: inline-block;
  padding: 4px 8px;
  background-color: #f7f7f7;
  color: #b0b0b0;
  border-radius: 2px;
}
</style>
