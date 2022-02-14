<template>
  <div class="rounded-2xl w-full px-4 py-4">
    <h3 class="text-2xl mb-4">Account balance</h3>
    <label class="w-full block">
      <span class="font-semibold">Total:</span> {{ this.tokens }}
    </label>
    <label class="w-full block">
      <span class="font-semibold">Free:</span> {{ this.tokens - this.vestingBalance }}
    </label>
    <label class="w-full block">
      <span class="font-semibold">Temporary blocked:</span> {{ this.vestingBalance }}
    </label>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    tokens: Number,
    vestingBalance: Number
  }
}
</script>

<style scoped>

</style>