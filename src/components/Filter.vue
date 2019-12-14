<template>
  <div class="vyhledavac">

    <div class="viewbox">

      <div class="group">
        <div class="selektor"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-previous">
           <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
          </svg>
          
          Zkušenosti majitele
        </div>

        <div class="text" > 
          <input type="checkbox" id="zacatecnik" value="true" v-model="vhodnyProZacatecniky" />
          <label for="zacatecnik">Vhodný pro začátečníky</label>
        </div> 
        <div class="text"> 
          <input type="checkbox" id="pokrocily" value="false" v-model="vhodnyProZacatecniky" />
          <label for="pokrocily">Vhodný pro pokročilé</label>
        </div>
      </div>
       
      <div class="group">
        <div class="selektor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-previous">
           <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
          </svg>
          Do bytu / na zahradu
        </div> 
        <div class="text"> 
          <input type="checkbox" id="byt" value="true" v-model="doBytu" />
          <label for="byt">Vhodný do bytu</label>
        </div> 
        <div class="text"> 
          <input type="checkbox" id="zahrada" value="false" v-model="doBytu" />
          <label for="zahrada">Vhodný na zahradu</label>
        </div>
      </div>
      

      <div class="group">
        <div class="selektor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-previous">
           <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
          </svg>
          Vztah psa ke zvířatům</div>
        <div class="text"> 
          <input type="checkbox" id="dobry" value="dobrý" v-model="vztahKJinymZviratum" />
          <label for="dobry">Dobrý</label>
        </div> 
        <div class="text"> 
          <input type="checkbox" id="spatny" value="špatný" v-model="vztahKJinymZviratum" />
          <label for="spatny">Špatný</label>
        </div> 
        <div class="text" >
          <input type="checkbox" id="specificky" value="specifický" v-model="vztahKJinymZviratum" />
          <label for="specificky">Specifický</label>
       </div>
      </div>

      <div class="group">
        <div class="selektor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-previous">
           <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
          </svg>
          Podle hmotnosti</div>

        <div class="text">
          <input type="checkbox" id="lehky" value="0-15" v-model="hmotnost" />
          <label for="lehky">Pes do 15kg (včetně)</label>
        </div>
        <div class="text">
          <input type="checkbox" id="tezky" value="16-99" v-model="hmotnost" />
          <label for="tezky">Pes nad 16kg</label>
        </div>
      </div>

      <div class="group">
        <div class="selektor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-previous">
           <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
          </svg>
          Podle výšky
          </div>
        <div class="text" >
          <input type="checkbox" id="maly" value="0-39" v-model="vyska" />
          <label for="maly">Pes do 39 centimetrů</label>
        </div>
    
        <div class="text" >
          <input type="checkbox" id="velky" value="40-150" v-model="vyska" />
          <label for="velky">Pes nad 40 centimetrů</label>
        </div>
      </div>
      <div class="group">
        <div class="selektor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-previous">
           <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
          </svg>
          Podle plemene
          </div>
         <div class="text" >
          <input type="checkbox" id="honici" value="Honiči a barváři" v-model="kategorie" />
          <label for="honici">Honiči a barváři</label>
         </div>
       <div class="text" >
          <input type="checkbox" id="chrti" value="Chrti" v-model="kategorie" />
          <label for="chrti">Chrti</label>
       </div>
        <div class="text" >
          <input type="checkbox" id="jezevcici" value="Jezevčíci" v-model="kategorie" />
          <label for="jezevcici">Jezevčíci</label>
       </div>
        <div class="text" >
          <input type="checkbox"
          id="pincove"
          value="Pinčové, knírači, plemena molossoidní a švýcarští salašničtí psi"
          v-model="kategorie" />
          <label for="pincove">Pinčové, knírači, plemena molossoidní a švýcarští salašničtí psi</label>
        </div>
       <div class="text" >
          <input
          type="checkbox"
          id="ovcaci"
          value="Plemena ovčácká, pastevecká a honácká"
          v-model="kategorie"/>
          <label for="ovcaci">Plemena ovčácká, pastevecká a honácká</label>
        </div>
        <div class="text" > 
          <input type="checkbox" id="slidici" value="Slídiči, retrívři a vodní psi" v-model="kategorie" />
          <label for="slidici">Slídiči, retrívři a vodní psi</label>
        </div>
        <div class="text" >
          <input type="checkbox" id="spolecenska" value="Společenská plemena" v-model="kategorie" />
          <label for="spolecenska">Společenská plemena</label>
        </div>
        <div class="text" >
          <input type="checkbox" id="spicove" value="Špicové a plemena primitivní" v-model="kategorie" />
          <label for="spicove">Špicové a plemena primitivní</label>
        </div>
       <div class="text" >
          <input type="checkbox" id="terieri" value="Teriéři" v-model="kategorie" />
          <label for="terieri">Teriéři</label>
       </div>
   </div>
  
     
    </div> 
    
      <button class="tlacidlo" v-on:click="vyhledat()">Vyhledat</button>

    </div> 

</template>

<script>

export function getDefaultData()
{
  return {
    vztahKJinymZviratum: [],
    hmotnost: [],
    vyska: [],
    doBytu: [],
    vhodnyProZacatecniky: [],
    kategorie: []
  }
}

export default {
  data() {
    return getDefaultData();
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
  console.log( bool, bool[0] )
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
.vyhledavac {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #EFEFEF;
  
}

.viewbox{
  overflow: auto;
  flex: 1;
}
.selektor{
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  background-image: linear-gradient( #E4E4E4, #EAEAEA);
  padding: 20px;
  height: 30px;
  vertical-align: middle; 
}
.text{
  font-size: 20px;
  margin: 5px; 
  padding: 7px 20px; 
  display: flex;
  
}

.text input{
  margin-right: 10px;
}
.tlacidlo {
  font-size: 22px;
  font-weight: bold;
  color: white; 
  background-color: rgb(127, 182, 133);
  flex: 0 0 80px;
  text-transform: uppercase;
  position: flex;
}
.icon-previous{
  width: 20px;
  transform: rotate(270deg)
}
/* .selekce {
  display: grid; 
  padding:20px;
  grid-template-columns: 30px auto; 
}
.selektor {
  grid-column: 1/3;
} */


</style>