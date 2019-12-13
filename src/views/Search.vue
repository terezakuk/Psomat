<template>
  <div>
    <div class="nadpisVyhledavani">
      <div class="nadpisVyhledavaniDruhy">
        <h1>Vyhledávání v kategoriích</h1>
      </div>
    </div>
    <filter-psu v-on:filtruj="filtruj($event)" />
    <div v-if="vyhledej">
      <dogs v-bind:filter="filter" />
    </div>
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
.nadpisVyhledavani {
  background-image: linear-gradient(
    to right,
    rgb(148, 144, 146),
    rgb(197, 218, 167)
  );
}
.nadpisVyhledavaniDruhy {
  background-color: rgba(255, 0, 255, 0.4);
}
</style>