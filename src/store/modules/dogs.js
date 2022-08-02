import axios from "axios";

const state = {
  dogs: [],
};

const getters = {
  allDogs: (state) => state.dogs,
};

const actions = {
  async fetchDogs({ commit }) {
    const res = await axios.get("https://dog.ceo/api/breed/hound/images");

    commit("setDogs", res.data.message.slice(0, 99)); //Only return 100 images
  },

  async filterDogs({ commit }, breed) {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);

    commit("setDogs", res.data.message);
  },
};

const mutations = {
  setDogs: (state, dogs) => (state.dogs = dogs),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
