<template>
  <div class="detail">
    <p v-if="loading">Nacitam data</p>

    <div v-if="!loading">
    
      <p>Rasa: {{ dog.nazevPsa}}</p>
      <p>Kategorie: {{ dog.kategorie}}</p>
       <img class="fotka" v-bind:src="dog.foto"> 
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
.fotka {
  max-width: 100%;
}

.detail {
margin-left: 40px;
margin-right: 40px;
padding: 10px;
background-image: linear-gradient(to right, rgb(207, 251, 136), rgba(117, 238, 87, 0.911));
border: 1px solid gray;
}

/*
.detail p {
  font-family: 'Lobster', cursive;P0
} */

</style>