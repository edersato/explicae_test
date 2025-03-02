import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCheckboxes: {} // Objeto para armazenar os checkboxes selecionados
  },
  mutations: {
    TOGGLE_CHECKBOX(state, { componentId, checkboxId }) {
      if (!state.selectedCheckboxes[componentId]) {
        state.selectedCheckboxes[componentId] = [];
      }

      const index = state.selectedCheckboxes[componentId].indexOf(checkboxId);
      if (index === -1) {
        state.selectedCheckboxes[componentId].push(checkboxId);
      } else {
        state.selectedCheckboxes[componentId].splice(index, 1);
      }
    }
  },
  getters: {
    getSelectedCheckboxes: (state) => (componentId) => {
      return state.selectedCheckboxes[componentId] || [];
    }
  }
});
