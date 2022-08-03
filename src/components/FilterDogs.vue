<template>
  Filter By Breed:
  <div class="flex mt-3">
    <!-- <label
      for="breeds"
      class="block flex-shrink-0 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >Select an option</label
    > -->
    <select
      id="breeds"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      @change="$store.dispatch('filterDogs', $event.target.value)"
    >
      <option selected>Choose a breed</option>
      <option v-for="breed in allBreeds" :key="breed" :value="breed">
        {{ breed }}
      </option>
    </select>
  </div>
  <!-- <select @change="$store.dispatch('filterDogs', $event.target.value)">
    <option value="">Select breed</option>
    <option v-for="breed in allBreeds" :key="breed" :value="breed">
      {{ breed }}
    </option>
  </select> -->
</template>
<script>
export default {
  name: "FilterDogs",
  computed: {
    allBreeds() {
      return this.$store.getters.allBreeds;
    },
  },
  created() {
    this.$store.dispatch("fetchBreeds");
  },
};
</script>
