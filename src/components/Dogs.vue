<template>
  <div class="vyfiltrovaniPsi">
    <div class="seznam">
      <p v-if="loading">Načítám data...</p>
      <ul v-if="!loading">
        <!-- <li v-for="pes in psi" v-bind:key="pes.id"> -->
        <li v-for="pes in filtrovaniPsi" v-bind:key="pes.id">
          <router-link v-bind:to="`/dog/${pes.id}`">{{ pes.nazevPsa }}</router-link>
        </li>
      </ul>
      <p v-if="filtrovaniPsi.length === 0">Žádný pejsek nesplňuje kritéria zadaného filtru.</p>
    </div>
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

  watch: {
    filter: function(novyFilter, staryFilter) {
      this.filtrovaniPsi = filtrujPsy(this.psi, novyFilter);
    }
  },
  mounted() {
    fetch("/api/dogs.json")
      .then(response => response.json())
      .then(data => {
        this.psi = data;
        this.filtrovaniPsi = filtrujPsy(this.psi, this.filter);
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

function mapujOdDo(odDoString) {
  let promennaOdDo = odDoString.split("-");
  return {
    od: parseInt(promennaOdDo[0]),
    do:
      promennaOdDo.length > 1
        ? parseInt(promennaOdDo[1])
        : parseInt(promennaOdDo[0])
  };
}

function filtrujPsy(psi, filter) {
  console.log("filtruj psy", filter);
  if (bezFiltru(filter)) {
    //když žádný filtr není vybrán, tak vrátí všechny psi
    return psi;
  } else {
    return psi.filter(pes => splnujePesFiltry(pes, filter));
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

function splnujeRozsah(filterOdDo, pesOdDo) {
  if (filterOdDo.do < pesOdDo.od) {
    return false;
  }
  if (filterOdDo.od > pesOdDo.do) {
    return false;
  }
  return true;
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
  if (pouzitArrayFilter(filter.vztahKJinymZviratum)) {
    let vztahSplnuje = false;
    filter.vztahKJinymZviratum.forEach(vztah => {
      if (vztah == hafan.vztahKJinymZviratum) {
        vztahSplnuje = true;
      }
    });
    if (!vztahSplnuje) {
      splnuje = false;
    }
  }
  if (pouzitArrayFilter(filter.kategorie)) {
    let kategorieSplnuje = false;
    filter.kategorie.forEach(kat => {
      if (kat == hafan.kategorie) {
        kategorieSplnuje = true;
      }
    });
    if (!kategorieSplnuje) {
      splnuje = false;
    }
  }

  if (pouzitArrayFilter(filter.hmotnost)) {
    let hmotnostSplnuje = filter.hmotnost.some(rozsahHmotnosti =>
      splnujeRozsah(rozsahHmotnosti, mapujOdDo(hafan.hmotnost))
    );
    if (!hmotnostSplnuje) {
      splnuje = false;
    }
  }
  if (pouzitArrayFilter(filter.vyska)) {
    let vyskuSplnuje = filter.vyska.some(rozsahVysky =>
      splnujeRozsah(rozsahVysky, mapujOdDo(hafan.vyska))
    );
    if (!vyskuSplnuje) {
      splnuje = false;
    }
  }

  return splnuje;
}

function pouzitBooleanFilter(boolFilter) {
  if (boolFilter != null) {
    return true;
  } else {
    return false;
  }
}

function pouzitArrayFilter(arrayFilter) {
  if (arrayFilter.length != 0) {
    return true;
  } else {
    return false;
  }
}
</script>

<style>
.vyfiltrovaniPsi {
  background-image: linear-gradient(
    to right,
    rgb(148, 144, 146),
    rgb(197, 218, 167)
  );
  display: grid;
}
.seznam {
  margin: 50px;
  padding: 10px;
  background-image: linear-gradient(to right, rgb(207, 251, 136));
  border: 10px dotted white;
  grid-template-columns: 30px auto;
}
</style>