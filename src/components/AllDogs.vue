<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <filter-dogs />
    <div>Dogs</div>
    <div class="gap-3 columns-4 space-y-3">
      <div v-for="dog in allDogs" :key="dog">
        <img
          class="w-full object-center object-cover rounded-xl h-auto max-w-lg"
          :src="dog"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterDogs from "./FilterDogs.vue";
export default {
  name: "AllDogs",
  props: {},
  components: {
    FilterDogs,
  },
  computed: {
    allDogs() {
      return this.$store.getters.allDogs;
    },
  },
  created() {
    //Fetch dogs
    this.$store.dispatch("fetchDogs");
  },
};
</script>
