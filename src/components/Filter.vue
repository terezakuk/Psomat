<template>
  <div>
    <h1></h1>

    <div class="pokus">
      <h3>Vyhledání psa dle vhodnosti zkušeností majitele</h3>
      <input type="checkbox" id="zacatecnik" value="true" v-model="vhodnyProZacatecniky" />
      <label for="zacatecnik">Vhodný pro začátečníky</label>
      <input type="checkbox" id="pokrocily" value="false" v-model="vhodnyProZacatecniky" />
      <label for="pokrocily">Vhodný pro pokročilé</label>

      <h3>Vyhledání psa dle vhodnosti do bytu/zahrady</h3>
      <input type="checkbox" id="byt" value="true" v-model="doBytu" />
      <label for="byt">Vhodný do bytu</label>
      <input type="checkbox" id="zahrada" value="false" v-model="doBytu" />
      <label for="zahrada">Vhodný na zahradu</label>

      <h3>Vztah psa k ostatním zvířatům</h3>
      <input type="checkbox" id="dobry" value="dobrý" v-model="vztahKJinymZviratum" />
      <label for="dobry">Dobrý</label>

      <input type="checkbox" id="spatny" value="špatný" v-model="vztahKJinymZviratum" />
      <label for="spatny">Špatný</label>

      <input type="checkbox" id="specificky" value="specifický" v-model="vztahKJinymZviratum" />
      <label for="specificky">Specifický</label>

      <h3>Vyhledání psa dle hmotnosti</h3>

      <input type="checkbox" id="lehky" value="0-15" v-model="hmotnost" />
      <label for="lehky">Pes do 15kg (včetně)</label>

      <input type="checkbox" id="tezky" value="16-99" v-model="hmotnost" />
      <label for="tezky">Pes nad 16kg</label>

      <h3>Vyhledání psa dle výšky</h3>

      <input type="checkbox" id="maly" value="0-39" v-model="vyska" />
      <label for="maly">Pes do 39 centimetrů</label>

      <input type="checkbox" id="velky" value="40-150" v-model="vyska" />
      <label for="velky">Pes nad 40 centimetrů</label>

      <h3>Vyhledání podle plemene</h3>
      <input type="checkbox" id="honici" value="Honiči a barváři" v-model="kategorie" />
      <label for="honici">Honiči a barváři</label>
      <input type="checkbox" id="chrti" value="Chrti" v-model="kategorie" />
      <label for="chrti">Chrti</label>
      <input type="checkbox" id="jezevcici" value="Jezevčíci" v-model="kategorie" />
      <label for="jezevcici">Jezevčíci</label>
      <input
        type="checkbox"
        id="pincove"
        value="Pinčové, knírači, plemena molossoidní a švýcarští salašničtí psi"
        v-model="kategorie"
      />
      <label for="pincove">Pinčové, knírači, plemena molossoidní a švýcarští salašničtí psi</label>
      <input
        type="checkbox"
        id="ovcaci"
        value="Plemena ovčácká, pastevecká a honácká"
        v-model="kategorie"
      />
      <label for="ovcaci">Plemena ovčácká, pastevecká a honácká</label>
      <input type="checkbox" id="slidici" value="Slídiči, retrívři a vodní psi" v-model="kategorie" />
      <label for="slidici">Slídiči, retrívři a vodní psi</label>
      <input type="checkbox" id="spolecenska" value="Společenská plemena" v-model="kategorie" />
      <label for="spolecenska">Společenská plemena</label>
      <input type="checkbox" id="spicove" value="Špicové a plemena primitivní" v-model="kategorie" />
      <label for="spicove">Špicové a plemena primitivní</label>
      <input type="checkbox" id="terieri" value="Teriéři" v-model="kategorie" />
      <label for="terieri">Teriéři</label>
    </div>
<br>
    <button v-on:click="vyhledat()">Vyhledat</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vztahKJinymZviratum: [],
      hmotnost: [],
      vyska: [],
      doBytu: [],
      vhodnyProZacatecniky: [],
      kategorie: []
    };
  },

  methods: {
    vyhledat() {
      let filter = {
        vztahKJinymZviratum: this.vztahKJinymZviratum.map(x => x),
        hmotnost: this.hmotnost.map(mapujOdDo),
        vyska: this.vyska.map(mapujOdDo),
        doBytu: mapujBoolean(this.doBytu),
        vhodnyProZacatecniky: mapujBoolean(this.vhodnyProZacatecniky),
        kategorie: this.kategorie.map(x => x)
      };

      console.log(filter);
      this.$emit("filtruj", filter);
    }
  }
};

function mapujOdDo(odDoString) {
  let promennaOdDo = odDoString.split("-");
  return {
    od: parseInt(promennaOdDo[0]),
    do: parseInt(promennaOdDo[1])
  };
}

function mapujBoolean(bool) {
  if (bool.length === 0 || bool.length === 2) {
    return null;
  } else {
    if (bool[0] === "true") {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style>
</style>