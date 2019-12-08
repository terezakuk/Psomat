<template>
  <div><h1>Obrazovka vyhledavani</h1> 
  <filter-psu 
  v-on:filtruj="filtruj($event)"
  />
  </div>
</template>

<script>
import Filter from '@/components/Filter.vue'
export default {
    components: {
        'filter-psu': Filter
    },

    methods: {
      filtruj(filter){
console.log("filtruj", filter);
      }
    }
        
}
</script>

<style>

</style>