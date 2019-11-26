import cardApi from '../../api/card';

// initial state
const state = {
  word: {},
};

const getters = {
};

const actions = {
  getRandomWord({ commit }, folderId) {
    cardApi.getRandomWord(folderId, (word) => {
      commit('setWord', word);
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