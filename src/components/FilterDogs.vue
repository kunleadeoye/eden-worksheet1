<template>
  Filter Dogs:
  <select @change="$store.dispatch('filterDogs', $event.target.value)">
    <option v-for="breed in allBreeds" :key="breed" :value="breed">
      {{ breed }}
    </option>
  </select>
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
