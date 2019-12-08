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
}
</style>
