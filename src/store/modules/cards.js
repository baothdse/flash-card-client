import cardApi from '../../api/card';

// initial state
const state = {
  word: {},
};

const getters = {
};

const actions = {
  getRandomWord({ commit }) {
    cardApi.getRandomWord((word) => {
      commit('setWord', word.data);
    });
  },
  searchWord({ commit }, searchingWord) {
    cardApi.searchWord(searchingWord, (word) => {
      commit('setWord', word);
    });
  },
};

// mutations
const mutations = {
  setWord(state, word) {
    state.word = word;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
