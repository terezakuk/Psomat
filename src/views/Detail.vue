<template>
  <div>
    <child-screen :route="wasSearching ? '-1' : '/search' ">
      <dog v-bind:id="id" />
    </child-screen>
  </div>
</template>

<script>
import Dog from "../components/Dog.vue";
import ChildScreen from "@/components/Child-screen.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["wasSearching"])
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },

  
  components: {
    dog: Dog,
    "child-screen": ChildScreen
  }
};
</script>

<style>
</style>