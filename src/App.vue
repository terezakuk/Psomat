<template>
  <div id="app">
    <div class=menu id="nav">
      <router-link to="/">Úvod</router-link> |
      <router-link to="/search">Vyhledávač psů</router-link>
      
       <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    
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
  background: #68727c url('/images/background_image.jpg')/*  center/cover no-repeat */ ;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh; 
  font-family: 'Lobster', cursive;
/*   margin-right: 50px;
  margin-left: 50px; */
  color: pink;
  text-shadow: 1px 3px gray;
  max-height: 951px;
  min-width: 400px; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
}

.popis {
  font-family: 'Lobster', cursive;
  margin-right: 100px;
  margin-left: 100px;
  text-align: center;
  color: pink;
  text-shadow: 1px 3px gray;
}
h1
{
  text-align: center;
  padding: 40px;
  margin: 0px;
}

.menu{
  background-color: black;
  padding: 20px;

}


</style>
