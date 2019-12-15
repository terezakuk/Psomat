<template>
  <div class="child-screen">
    <div @click="redirect()" class="tlacitko">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
        <path d="M7 13.1l8.9 8.9c.8-.8.8-2 0-2.8l-6.1-6.1 6-6.1c.8-.8.8-2 0-2.8L7 13.1z" />
      </svg>
      Zpět
    </div>

    <div class="slot-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["route"],
  methods: {
    redirect() {
		if (this.route === "-1") {
			return window.history.back();
		} else {
			document.location = this.route;
		}
	}
  }
};
</script>

<style>
.child-screen {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.slot-content {
  flex: 1;
  overflow: auto;
}

.icon {
  width: 20px;
  fill: white;
}

.tlacitko {
  display: block;
  flex: 0 0 40px;
  background-color: #1e2d2f;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px;
}
</style>