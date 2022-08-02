import axios from "axios";

const state = {
  dogs: [],
  loading: true,
};

const getters = {
  allDogs: (state) => state.dogs,
  isLoading: (state) => state.loading,
};

const actions = {
  async fetchDogs({ commit }) {
    commit("setLoading", true);
    const res = await axios.get("https://dog.ceo/api/breed/hound/images");

    commit("setDogs", res.data.message.slice(0, 99)); //Only return 100 images
    commit("setLoading", false);
  },

  async filterDogs({ commit }, breed) {
    commit("setLoading", true);
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);

    commit("setDogs", res.data.message);
    commit("setLoading", false);
  },
};

const mutations = {
  setDogs: (state, dogs) => (state.dogs = dogs),
  setLoading: (state, payLoad) => (state.loading = payLoad),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
