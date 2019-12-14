<template>
  <div>
    <div class="nadpisVyhledavani">
      <div class="nadpisVyhledavaniDruhy">
        <h1>Vyhledávání v kategoriích</h1>
      </div>
    </div>
    <filter-psu v-on:filtruj="filtruj($event)" />
  </div>
</template>

<script>
import Filter from "@/components/Filter.vue";

import router from "@/router";
export default {
  data() {
    return {
      filter: {}
    };
  },
  components: {
    "filter-psu": Filter
  },
  methods: {
    filtruj(filter) {
      router.push({ path: 'results', query: filter })
    }
  }
};
</script>

<style>
.nadpisVyhledavani {
display: none;

}
.nadpisVyhledavaniDruhy {
 /*  background-color: rgba(255, 0, 255, 0.4); */
display: none;
}
</style>