<template>
  <div class="vyfiltrovaniPsi">
    <div class="seznam">
      <p v-if="loading">Načítám data...</p>
      <div v-if="!loading">
		  
        <router-link v-bind:to="`/dog/${pes.id}`" v-for="pes in filtrovaniPsi" v-bind:key="pes.id" class="plemeno">
			<div :style="`background-image: url( ${ pes.foto } )`" class="foto-plemene"></div>
			<div class="pes-info">
				<div class="nazev-plemene"> {{ pes.nazevPsa }} </div>
				<div class="popis-plemene"> {{ pes.zajimavost }} </div>
			</div>
          </router-link>

      </div>
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
    console.log("mounted")
    fetch("/api/dogs.json")
      .then(response => response.json())
      .then(data => {

		Object.keys( this.filter ).forEach( key =>
		{
			if ( this.filter[ key ] === "true" )
			{
				this.filter[ key ] = true
			}
		})

		this.psi = data;
        this.filtrovaniPsi = filtrujPsy(this.psi, this.filter);
        this.loading = false;
        console.log( "dogs loaded", this )
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
  if (pouzitBooleanFilter(filter.doBytu)) {
    if (filter.doBytu != hafan.doBytu) {
      return false;
    }
  }
  if (pouzitBooleanFilter(filter.vhodnyProZacatecniky)) {
    if (filter.vhodnyProZacatecniky != hafan.vhodnyProZacatecniky) {
      return false;
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
      return false;
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
      return false;
    }
  }

  if (pouzitArrayFilter(filter.hmotnost)) {
    let hmotnostSplnuje = filter.hmotnost.some(rozsahHmotnosti =>
      splnujeRozsah(rozsahHmotnosti, mapujOdDo(hafan.hmotnost))
    );
    if (!hmotnostSplnuje) {
      return false;
    }
  }
  if (pouzitArrayFilter(filter.vyska)) {
    let vyskuSplnuje = filter.vyska.some(rozsahVysky =>
      splnujeRozsah(rozsahVysky, mapujOdDo(hafan.vyska))
    );
    if (!vyskuSplnuje) {
      return false;
    }
  }

  return true;
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

.plemeno
{
	display: flex;
	grid-template-areas: "foto nazev" "foto popis";
	height: 85px;

	text-decoration: none;
	color: black;
	padding: 20px;
	background-image: linear-gradient( #E4E4E4, #EAEAEA )
}

.foto-plemene
{
	width: 100px;
	height: 80px;
	padding-left: 10px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.pes-info
{
	flex: 1;
}

.nazev-plemene
{
	padding-left: 10px;
	font-size: 22px;
}

.popis-plemene
{
	grid-area: popis;
	overflow: hidden;

	margin-top: 10px;
	padding-left: 10px;
	padding-bottom: 20px;
	height: 18px;

	font-size: 16px;
}

</style>