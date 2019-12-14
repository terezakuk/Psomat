<template>
  <div>
    <router-link to="/search" class="tlacitko">Zpět</router-link>

 
  <slot>
  </slot>

   </div>
</template>

<script>

export default {

}
</script>

<style>
.tlacitko {
  display: block;
  flex: 1;
  height: 40px;
  background-color: #1e2d2f;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px;
  width: 100%;
}

</style>