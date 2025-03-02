<template>
  <div>
    <!-- Navegação de Tabs utilizando Bootstrap -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
        <button
          class="nav-link"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
          :id="`tab-${componentId}-${index}`"
          data-bs-toggle="tab"
          type="button"
          role="tab"
          :aria-controls="`tab-pane-${componentId}-${index}`"
          :aria-selected="activeTab === index ? 'true' : 'false'"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tab-content mt-3">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-pane fade"
        :class="{ 'show active': activeTab === index }"
        :id="`tab-pane-${componentId}-${index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${componentId}-${index}`"
      >
        <div class="container mt-4">
          <h3>Conteúdos dessa aula:</h3>
          <CheckboxAula
            :items="checkboxItems"
            :groupId="`${componentId}-${index}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import CheckboxAula from "./CheckboxAula.vue";
export default {
  name: "ItensAulas",

  components: { CheckboxAula },

  props: {
    componentId: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      default: () => [
        {
          title: "Aula 1",
          content: "Conteúdo da Aula 1",
        },
        {
          title: "Exercicio 2",
          content: "Conteúdo da Exercicio 2",
        },
        {
          title: "Material 3",
          content: "Conteúdo da Material 3",
        },
      ],
    },
  },

  data() {
    return {
      activeTab: 0,
      checkboxItems: [
        { value: "op1", label: "Opção 1" },
        { value: "op2", label: "Opção 2" },
        { value: "op3", label: "Opção 3" },
        { value: "op4", label: "Opção 4" },
        { value: "op5", label: "Opção 5" },
      ],
    };
  },
};
</script>
  
  <style scoped>
</style>
  