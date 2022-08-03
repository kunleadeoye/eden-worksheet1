<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 py-12">
    <button
      class="text-gray-900 group hover:text-gray-800 flex items-center"
      @click="$router.back()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="ml-1.5">Go back</span>
    </button>
    <div class="mt-3 rounded-2xl shadow-lg p-6">
      <div class="flex flex-col lg:flex-row lg:space-x-6">
        <img
          class="object-cover object-center rounded-xl"
          :src="dogImageLink"
        />
        <div class="mt-2">
          <h3 class="text-xl font-semibold mb-3">
            The Dog CEO API doen't provide details about this dog
          </h3>
          <p class="mb-4">
            Research on dogs has exploded in recent decades. Universities have
            opened canine cognition labs, and scientists have probed dogs’
            intelligence, behavior, biology and skills.
          </p>
          <a href="https://dog.ceo/dog-api/" target="_blank">Go to API</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    dogImageLink() {
      return this.$route.params.image;
    },
  },
};
</script>
