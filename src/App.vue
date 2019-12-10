<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Úvod</router-link> |
      <router-link to="/search">Vyhledávač psů</router-link>
      
    
    </div>

  <router-view/> 
  </div>
</template>

<style>
 body {
	margin: 0;
	padding: 0;
	font-family: Raleway, sans-serif;
} 

.home {
  background: #68727c url('/images/background_image.jpg') center/cover no-repeat ;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100vh; 
  font-family: 'Lobster', cursive;
  margin-right: 100px;
  margin-left: 100px;
  color: pink;
  text-shadow: 1px 3px gray;
}

.popis {
  font-family: 'Lobster', cursive;
  margin-right: 100px;
  margin-left: 100px;
  text-align: center;
  color: pink;
  text-shadow: 1px 3px gray;
}

</style>
