<template>
  <div>
    <child-screen>
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

export default {

  components: {
    dogs: Dogs,
    'child-screen': ChildScreen,
  },

  data: () =>
  ({
	  filter: {}
  }),

  mounted()
  {
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

.tlacitko {
  flex: 1;
  height: 80px;
  background-color: #1e2d2f;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  width: 100%;
}

</style>