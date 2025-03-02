import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCheckboxes: {} // Alterado para objeto
  },
  mutations: {
    UPDATE_SELECTED_CHECKBOXES(state, { groupId, values }) {
      state.selectedCheckboxes[groupId] = values;
    }
  },
  actions: {
    updateSelectedCheckboxes({ commit }, { groupId, values }) {
      commit('UPDATE_SELECTED_CHECKBOXES', { groupId, values });
    }
  },
  getters: {
    selectedCount: (state) => (groupId) => state.selectedCheckboxes[groupId]?.length || 0
  }
});