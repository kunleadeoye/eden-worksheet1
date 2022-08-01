<template>
  <div>{{ dogs }}</div>
</template>

<script>
export default {
  // name: "AllDogs",
  props: {},
  computed: {
    dogs() {
      return this.$store.state.dogs;
    },
  },
};
</script>
