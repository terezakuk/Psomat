<template>
  <div>
    <h1>Tady budeme psat nas vyhledavac</h1>

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
      <input type="checkbox" id="kladny" value="kladný" v-model="vztahKJinymZviratum" />
      <label for="kladny">Kladný</label>

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
    </div>

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
      vhodnyProZacatecniky: []
    };
  },

  methods: {
    vyhledat() {
      console.log("vyhledat");
      console.log(this.vztahKJinymZviratum);
      console.log(this.hmotnost);
      console.log(this.vyska);
      console.log(this.doBytu);
      console.log(this.vhodnyProZacatecniky);
      let filter = {
        vztahKJinymZviratum: this.vztahKJinymZviratum.map(x => x),
        hmotnost: this.hmotnost.map(mapujOdDo),
        vyska: this.vyska.map(mapujOdDo),
        doBytu: mapujBoolean(this.doBytu),
        vhodnyProZacatecniky: mapujBoolean(this.vhodnyProZacatecniky)
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