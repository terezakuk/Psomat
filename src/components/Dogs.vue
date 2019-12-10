<template>
  <div>
    <p v-if="loading">Načítám data...</p>
    <ul v-if="!loading">
      <!-- <li v-for="pes in psi" v-bind:key="pes.id"> -->
      <li v-for="pes in filtrovaniPsi" v-bind:key="pes.id">
        <router-link v-bind:to="`/dog/${pes.id}`">{{ pes.nazevPsa }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      loading: true,
      psi: [],
      filtrovaniPsi: []
    };
  },
  mounted() {
    fetch("/api/dogs.json")
      .then(response => response.json())
      .then(data => {
        this.psi = data;
        this.filtrovaniPsi = filtrujPsy(data, this.filter);
        this.loading = false;
        console.log("loading skoncil", this.psi.length);
        console.log("filter_v_dogs", this.filter);
        console.log("vyfiltrovaniPsi", this.filtrovaniPsi);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

function filtrujPsy(psi, filter) {
  if (bezFiltru(filter)) {
    //když žádný filtr není vybrán, tak vrátí všechny psi
    return psi;
  } else {
    for (let index = psi.length - 1; index >= 0; index--) {
      //zde je hlavní filtr
      if (!splnujePesFiltry(psi[index], filter)) {
        console.log("odeberu_psa", psi[index].nazevPsa);
        psi.splice(index, 1);
      } else {
        console.log("nechávám_psa", psi[index].nazevPsa);
      }
    }
    return psi;
  }
}

function bezFiltru(filter) {
  if (
    filter.doBytu === null &&
    filter.hmotnost.length === 0 &&
    filter.kategorie.length === 0 &&
    filter.vhodnyProZacatecniky === null &&
    filter.vyska.length === 0 &&
    filter.vztahKJinymZviratum.length === 0
  ) {
    return true;
  } else {
    return false;
  }
}

function splnujePesFiltry(hafan, filter) {
  let splnuje = true;
  if (pouzitBooleanFilter(filter.doBytu)) {
    if (filter.doBytu != hafan.doBytu) {
      splnuje = false;
    }
  }
  if (pouzitBooleanFilter(filter.vhodnyProZacatecniky)) {
    if (filter.vhodnyProZacatecniky != hafan.vhodnyProZacatecniky) {
      splnuje = false;
    }
  }
/*   if (pouzitArrayFilter(filter.vztahKJinymZviratum)) {
    filter.vztahKJinymZviratum.forEach(vztah => {
      if (vztah != hafan.vztahKJinymZviratum) {
        splnuje = false;
      }
    });
  } */

  return splnuje;
  /* if (
    filter.doBytu === hafan.doBytu &&
         filter.hmotnost.length === 0 &&
    filter.kategorie.length === 0 && 
    filter.vhodnyProZacatecniky === hafan.vhodnyProZacatecniky  && 
      filter.vyska.length === 0 &&
    filter.vztahKJinymZviratum.length === 0 
  ) {    return true;  } else {    return false;  } */
}

function pouzitBooleanFilter(boolFilter) {
  if (boolFilter != null) {
    return true;
  } else {
    return false;
  }
}

function pouzitArrayFilter(arrayFilter) {
  if (arrayFilter.Length != 0) {
    return true;
  } else {
    return false;
  }
}
</script>

<style>
</style>