<template>
  <div>
    <child-screen route="/search">
      <dogs v-bind:filter="filter" />
<!--
      <button class="tlacitko"><router-link to="/search">Zpět</router-link></button>
       <button class="tlacitko" v-on:click="vyhledat()">Zpět</button>*/ -->

      <div class="vyhledano"> </div>
    </child-screen>
 
 </div>

</template>

<script>
import Dogs from "@/components/Dogs.vue";
import ChildScreen from "@/components/Child-screen.vue";
import { mapState, mapMutations } from "vuex";



export default {

  components: {
    dogs: Dogs,
    'child-screen': ChildScreen,
  },

  data: () =>
  ({
	  filter: {}
  }),

  methods: {
    ...mapMutations(["savePresents"])
  },

  mounted()
  { this.savePresents();
	  this.filter = 
	  {
		vztahKJinymZviratum: [],
		hmotnost: [],
		vyska: [],
		doBytu: null,
		vhodnyProZacatecniky: null,
		kategorie: [],
		...this.$route.query
	  }
  }
}

</script>

<style>

</style>