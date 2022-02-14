<template>
  <div class="rounded-2xl w-full px-4 py-4">
    <h3 class="text-2xl">Marketplace</h3>

    <div class="w-full my-4 flex flex-col">
      <h4 class="font-semibold">Exchange rate</h4>
      <span>100 LEO = 1 ETH</span>
      <span>1 ETH = 100 LEO</span>
    </div>
    <div class="w-full my-4 flex flex-col">
      <h4 class="font-semibold">Buy LEO</h4>
      <form class="my-2">
        <input type="number" id="buy-leo-amount" value="100" readonly class="border-[1px] px-4 py-2 mr-2"/>
        <input type="button" value="Buy 100 LEO for 1 ETH" class="border-[1px] px-4 py-2 bg-green-500 text-white" @click="this.buyTokens"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marketplace",
  methods: {
    buyTokens() {
      this.$emit('buyTokens');
    }
  }
}
</script>

<style scoped>

</style>