<template>
  <div>

    <dogs v-bind:filter="$route.query" />

    <router-link to="/search">Zpet na vyhledávač</router-link>
  </div>

</template>

<script>
import Dogs from "@/components/Dogs.vue";
export default {
  
  components: {
    dogs: Dogs
  },

  mounted()
  {
      console.log( this.$route.query )
  }
}
</script>

<style>
</style>