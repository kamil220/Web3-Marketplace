<script setup>
import Navbar from "./components/Navbar.vue";
import Quest from "./components/Quest.vue";
import Marketplace from "./components/Marketplace.vue";
</script>
<template>
  <Navbar class="mx-auto container" :connected="this.connected" :tokenId="this.address" :tokens="this.tokens" @connect="this.connect"></Navbar>

  <div class="mx-auto container my-14">
    <Quest v-if="!this.connected"></Quest>
    <Marketplace v-else></Marketplace>
  </div>
</template>


<script>
import TokenArtifact from "./contracts/Token.json";
import TokenAddress from "./contracts/contract-addresses.json";
import { ethers, Contract } from "ethers";

export default {
  name: "App",
  data() {
    return {
      connected: false,
      address: '',
      tokens: 0
    }
  },
  setup() {
    if( window.ethereum ) {
      console.log( 'You have no MetaMask installed.')
    }
  },
  methods: {
    async connect() {
      if (this.connected) {
        console.log('Already connected');
        return;
      }

      if (window.ethereum) {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        await this.provider.send( 'eth_requestAccounts', [] );

        this.signer = await this.provider.getSigner();

        this.token = new ethers.Contract( TokenAddress.Contract, TokenArtifact.abi, this.signer );
        this.address = await this.signer.getAddress();

        await this.refreshData();

        this.connected = true;
      }
    },

    async refreshData() {
      let tokens = await this.token.balanceOf( this.address );

      this.tokens = ethers.utils.formatUnits( tokens, 18 );
    }
  }
}

</script>