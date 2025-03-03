<template>
  <div>
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
          <span class="tabs-header">{{ tab.title }}</span>
          <span class="tabs-header">{{ tab.subtitle }}</span>
        </button>
      </li>
    </ul>
    <div class="tab-content mt-3 content-body">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-pane fade"
        :class="{ 'show active': activeTab === index }"
        :id="`tab-pane-${componentId}-${index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${componentId}-${index}`"
      >
        <div class="p-3">
          <div class="d-flex align-items-center justify-content-between mx-3">
            <h4>{{ tabs[activeTab]?.title || '' }}</h4>
            <h5>05 aulas | 01:00:00</h5>
          </div>
          <CheckboxAula :items="checkboxItems" :groupId="`${componentId}-${index}`" />
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
    componentId: { type: String, required: true },
    tabs: {
      type: Array,
      default: () => [
        { title: "Aula", subtitle: " | 01:00:00" },
        { title: "Exercício", subtitle: " | 01:00:00" },
        { title: "Material", subtitle: " | 01:00:00" },
      ],
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  computed: {
    checkboxItems() {
      const subItemsMap = {
        Aula: [
          { title: "Gramática" },
          { title: "Ortografia" },
          { title: "Pontuação" },
          { title: "Concordância" },
          { title: "Coesão" },
        ],
        Exercício: [
          { title: "Interpretação" },
          { title: "Resolução" },
          { title: "Análise" },
          { title: "Prática" },
          { title: "Aplicação" },
        ],
        Material: [
          { title: "Leitura" },
          { title: "Referência" },
          { title: "Conteúdo" },
          { title: "Resumo" },
          { title: "Dicas" },
        ],
      };
      const baseKey = this.tabs[this.activeTab].title.replace(/[0-9]/g, "").trim();
      const subItems = subItemsMap[baseKey] || [];
      const time = "00:12:00";
      return subItems.map((item, index) => ({
        value: `${baseKey.toLowerCase()}opt${index + 1}`,
        label: `Questões sobre ${item.title}`,
        time: time,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  --bs-nav-link-color: #000;
  --bs-nav-link-hover-color: #000;
}

.nav-tabs {
  --bs-nav-tabs-link-active-color: #000;
  --bs-nav-tabs-link-active-bg: #eccbfc;
}

.nav-link {
  border-bottom: 4px solid transparent;
}

.nav-link.active {
  border-bottom: 4px solid #6e04c0 !important;
}

.tabs-header {
  &:first-child {
    font-weight: 300;
  }
  &:last-child {
    font-weight: 500;
  }
}

.content-body {
  background-color: #eff0f0;
}
</style>