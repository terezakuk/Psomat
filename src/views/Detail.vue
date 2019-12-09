<template>
  <div>
    <h1>Detail jednoho psa</h1>

     <dog v-bind:id="id" /> 

    <router-link to="/search">Zpet na vyhledávač</router-link>
  </div>
</template>

<script>
import Dog from'../components/Dog.vue'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    dog: Dog
  }
};
</script>

<style>
</style>