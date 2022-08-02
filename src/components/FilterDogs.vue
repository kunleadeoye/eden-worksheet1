<template>
  Filter Dogs:
  <select @change="$store.dispatch('filterDogs', $event.target.value)">
    <option value="chow">Chow</option>
    <option value="coonhound">Coonhound</option>
  </select>
</template>
<script>
export default {
  name: "FilterDogs",
};
</script>
