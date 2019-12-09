<template>
<div>
  <p v-if="loading">Načítám data...</p>
  <ul v-if="!loading">
    <li v-for="(pes, index) in psi" v-bind:key="index">
      <router-link v-bind:to="`/dog/${ index }`">{{ pes.nazevPsa }}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      loading: true,
      psi: []
    };
  },
  mounted() {
    fetch("/api/dogs.json")
      .then(response => response.json())
      .then(data => {
        this.psi = data;
        this.loading = false;
        console.log("loading skoncil", this.psi.length)

      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>