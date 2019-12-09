<template>
  <div>
    <p v-if="loading">Nacitam data</p>
    <div v-if="!loading">
      <h3>Pes č. {{ id }}</h3>
      <p>Rasa: {{ dog.nazevPsa}}</p>
      <p>Kategorie: {{ dog.kategorie}}</p>
      <p>Země původu: {{ dog.zemePuvodu}}</p>
      <p>Hmotnost: {{ dog.hmotnost}}</p>
      <p>Výška: {{ dog.vyska}}</p>
      <p>Věk: {{ dog.vek}}</p>
      <p>Barva: {{ dog.barva}}</p>
      <p>Povaha: {{ dog.povaha}}</p>
      <p>Vztah k jiným zvířatům: {{ dog.vztahKJinymZviratum}}</p>
      <p>Vhodný pro začátečníky: {{ dog.vhodnyProZacatecniky}}</p>
      <p>Vhodný do bytu: {{ dog.doBytu }}</p>
      <p>Zajímavost: {{ dog.zajimavost}}</p>
      <p> {{ dog.foto}} </p>        
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      loading: true,
      dog: {}
    };
  },
  mounted() {
    fetch("/api/dogs.json")
      .then(response => response.json())
      .then(data => {        
        this.dog = data[this.id-1]; 
        this.loading = false;
        console.log("loading skoncil", this.dog);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>