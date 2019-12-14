<template>
  <div>

    <dogs v-bind:filter="filter" />

    <router-link to="/search">Zpet na vyhledávač</router-link>
  </div>

</template>

<script>
import Dogs from "@/components/Dogs.vue";
export default {
  
  components: {
    dogs: Dogs
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
</style>