<template>
  <div>
    <h1>Vyhledávání v kategoriích</h1>
    <filter-psu v-on:filtruj="filtruj($event)" />
    <div v-if="vyhledej">
      <dogs v-bind:filter="filter" />  
             
    </div>
  </div>
</template>

<script>
import Filter from "@/components/Filter.vue";
import Dogs from "@/components/Dogs.vue";
export default {
   data() {
    return {
      filter: {},
      vyhledej: false
    };
  },
  components: {
    "filter-psu": Filter,
    dogs: Dogs
  },
  methods: {
    filtruj(filter) {
      console.log("filtruj_v_search", filter);
      this.filter = filter;
      this.vyhledej = true; 
    }

  }
};
</script>

<style>

</style>