<template>
<div class=uvodniStrana>
  <div class="home">
    <router-link class="tlacitecko" to="/search">Začít</router-link>
  </div>
  <div class=logo>
   <img src="images/logggo.png" alt="logoPsomat">
  </div>
</div>

</template>

<script>
// @ is an alias to /src


export default {

  
  
}
</script>

<style>
.tlacitecko{
/*   display:block; */
  background: #EA526F;
  border-radius: 9px;
  color: white; 
  text-transform: uppercase;
  font-size: 18px;
  position: fixed; 
  font-weight: 600;
  bottom: 60px;
  padding: 20px 120px;
  text-decoration: none;
  position: absolute;
  left: 50%;
  margin-left: -165px;
  

}
 body {
	margin: 0;
	padding: 0;
	font-family: Raleway, sans-serif;
} 
.uvodniStrana{
  position: relative;
  text-align: center;
}
.home {
  background: url('/images/background_image.jpg');
  height: 100vh;
  min-width: 400px; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flow-root;
  position: fixed; 
}
.hlavniNadpis{
text-transform: uppercase;
vertical-align: middle; 
}
.logo{
  position: absolute;
  top: 60px;
  left: 50%;
  margin: 0 auto;
  width: 200px;
  transform: translateX(-50%);
}
.logo > img {
  width: 100%;

}
</style>
