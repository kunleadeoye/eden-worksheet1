<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <filter-dogs />
    <div>Dogs</div>
    <div v-if="isLoading" class="relative">
      <the-loader />
    </div>
    <div v-else class="gap-3 columns-4 space-y-3">
      <div v-for="dog in allDogs" :key="dog">
        <img
          class="w-full object-center object-cover rounded-xl h-auto max-w-lg"
          v-lazy="dog"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterDogs from "./FilterDogs.vue";
import TheLoader from "./TheLoader.vue";
export default {
  name: "AllDogs",
  components: {
    FilterDogs,
    TheLoader,
  },
  computed: {
    allDogs() {
      return this.$store.getters.allDogs;
    },

    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  created() {
    //Fetch dogs
    this.$store.dispatch("fetchDogs");
  },
};
</script>
