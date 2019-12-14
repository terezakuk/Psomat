<template>
  <div>

    <router-link to="/search" class="tlacitko">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
			<path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z"/>
		</svg>
		Zpět
	</router-link>

 
  <slot>
  </slot>

   </div>
</template>

<script>

export default {

}
</script>

<style>
.icon
{
	width: 20px;
	fill: white;
}

.tlacitko {
  display: block;
  flex: 1;
  height: 40px;
  background-color: #1e2d2f;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px;
}

</style>