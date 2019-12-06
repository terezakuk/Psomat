<template>
  
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
        this.psi = data.results;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
</script>

<style>

</style>