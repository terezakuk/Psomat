<template>
  <div>

	<child-screen>
      <dog v-bind:id="id" /> 
    </child-screen>

  </div>
</template>

<script>
import Dog from'../components/Dog.vue'
import ChildScreen from "@/components/Child-screen.vue";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
	dog: Dog,
	'child-screen': ChildScreen,
  }
};
</script>

<style>
</style>