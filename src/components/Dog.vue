<template>
 <div class="detail">
	<p v-if="loading">Nacitam data</p>

	<div v-if="!loading">
		<img class="fotka" v-bind:src="dog.foto" />
		<div class="nazev-psa">
			{{ dog.nazevPsa}}
		</div>

		<div class="zajimavosti">
			{{ dog.zajimavost }}
		</div>

		<div class="informace">

			<div class="property">
				<div class="property__label"> Kategorie </div>
				<div class="property__value">{{ dog.kategorie }} </div>
			</div>

			<div class="property">
				<div class="property__label"> Země původu </div>
				<div class="property__value">{{ dog.zemePuvodu }} </div>
			</div>

			<div class="property">
				<div class="property__label"> Hmotnost </div>
				<div class="property__value">{{ dog.hmotnost }}kg</div>
			</div>

			<div class="property">
				<div class="property__label"> Výška </div>
				<div class="property__value">{{ dog.vyska }}cm </div>
			</div>

			<div class="property">
				<div class="property__label"> Věk </div>
				<div class="property__value">{{ dog.vek }} v letech </div>
			</div>
			<div class="property">
				<div class="property__label"> Barva </div>
				<div class="property__value">{{ dog.barva }} </div>
			</div>

			<div class="property">
				<div class="property__label"> Povaha </div>
				<div class="property__value"> {{ dog.povaha }} </div>
			</div>

			<div class="property">
				<div class="property__label"> Vztah k jiným zvířatům </div>
				<div class="property__value"> {{ dog.vztahKJinymZviratum }} </div>
			</div>

			<div class="property">
				<div class="property__label"> Vhodný pro začátečníky </div>
				<div class="property__value"> {{ dog.vhodnyproZacatecniky ? 'Ano' : 'Ne'  }} </div>
			</div>

			<div class="property">
				<div class="property__label"> Vhodný do bytu </div>
				<div class="property__value"> {{ dog.doBytu ? 'Ano' : 'Ne'  }} </div>
			</div>

			

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
	padding: 15px;
}

.zajimavosti {
	font-size: 18px;
	margin: 5px 0 15px 0;

}
.property {
	padding: 10px 0;
}

.nazev-psa {
padding-top: 20px;
font-size: 24px;
font-weight: bold;
}

.property__label {
	font-size: 20px;
	font-weight: bold;

}

.property__value {
	font-size: 18px;
}

</style>