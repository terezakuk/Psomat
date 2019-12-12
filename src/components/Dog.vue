<template>
  <div class="detail">
    <p v-if="loading">Nacitam data</p>

    <div v-if="!loading">
      <div class="podnadpis">
        <h2>{{ dog.nazevPsa}}</h2>
      </div>
      <div class="informace">
        <p>Kategorie: {{ dog.kategorie}}</p>
        <img class="fotka" v-bind:src="dog.foto" />
        <p>Země původu: {{ dog.zemePuvodu}}</p>
        <p>Hmotnost v kilogramech: {{ dog.hmotnost}}</p>
        <p>Výška v centimetrech: {{ dog.vyska}}</p>
        <p>Věk: {{ dog.vek}}</p>
        <p>Barva: {{ dog.barva}}</p>
        <p>Povaha: {{ dog.povaha}}</p>
        <p>Vztah k jiným zvířatům: {{ dog.vztahKJinymZviratum}}</p>
        <p>Vhodný pro začátečníky: {{ dog.vhodnyproZacatecniky}}</p>
        <p>Vhodný do bytu: {{ dog.doBytu }}</p>
        <p>Zajímavost: {{ dog.zajimavost}}</p>
      </div>
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
        this.dog = data[this.id - 1];
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
  margin-left: 430px;
  margin-right: 430px;
  padding: 10px;
  background-image: linear-gradient(
    to right,
    rgba(251, 182, 136, 0.876),
    rgba(241, 113, 73, 0.911)
  );
  border: 1px solid gray;
}

.podnadpis {
  text-align: center;
  padding: 10px;
  color: darkslategray;
 font-family: 'Lobster', cursive;

}

.informace {
  padding: 20px;
  font-family: 'Lobster', cursive;
  color: darkslategrey;
  
}

</style>