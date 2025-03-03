<template>
  <div class="accordion" :id="accordionId">
    <div
      class="accordion-item"
      v-for="(item, index) in processedItems"
      :key="index"
    >
      <h2 class="accordion-header" :id="`heading-${accordionId}-${index}`">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${accordionId}-${index}`"
          :aria-expanded="item.active ? 'true' : 'false'"
          :aria-controls="`collapse-${accordionId}-${index}`"
        >
          <div class="headingInfo">
            <span class="title">{{ item.title }}</span>
            <div class="details mt-2">
              <span class="me-3">{{ item.aulas }}</span>
              <span class="me-3">{{ item.exercicios }}</span>
              <span class="me-3">{{ item.materiais }}</span>
            </div>
          </div>
        </button>
      </h2>
      <div
        :id="`collapse-${accordionId}-${index}`"
        class="accordion-collapse collapse"
        :class="{ show: item.active }"
        :aria-labelledby="`heading-${accordionId}-${index}`"
        :data-bs-parent="`#${accordionId}`"
      >
        <div class="accordion-body">
          <Aulas
            v-if="item.subItems && item.subItems.length"
            :items="item.subItems"
            :subAccordionId="`nested-${accordionId}-${index}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aulas from "./Aulas.vue";

export default {
  name: "Cadernos",
  components: { Aulas },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    accordionId: {
      type: String,
      default: "accordionId",
    },
  },
  computed: {
    processedItems() {
      const subItemsMap = this.getSubItemsMap();
      return this.items.map((item) => ({
        ...item,
        subItems: subItemsMap[this.accordionId]?.[item.title] || [],
      }));
    },
  },
  methods: {
    getSubItemsMap() {
      const createSubItems = (titles) => titles.map((title) => ({
        title,
        aulas: `Aulas: ${Math.floor(Math.random() * 100)} | ${Math.floor(Math.random() * 10)}h ${Math.floor(Math.random() * 60)}m`,
        exercicios: `Exercícios: ${Math.floor(Math.random() * 100)} | ${Math.floor(Math.random() * 10)}h ${Math.floor(Math.random() * 60)}m`,
        materiais: `Materiais: ${Math.floor(Math.random() * 100)} | ${Math.floor(Math.random() * 10)}h ${Math.floor(Math.random() * 60)}m`,
      }));

      return {
        contentLanguage: {
          "1. Interpretação de Textos": createSubItems([
            "Competência 01: Palavras, Imagem e Vida Social",
            "Competência 06: Contexto e Função",
            "Competência 07: Opiniões e Ponto de Vista",
            "Competência 08: Diversidade Linguística",
          ]),
        },
        contentGrammar: {
          "2. Gramática": createSubItems([
            "2.1 Fonologia",
            "2.2 Morfologia",
            "2.3 Sintaxe",
          ]),
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$accordion-color: #fbfbfb;

.headingInfo {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #000;

  .title {
    font-size: 1.5rem;
  }

  .details {
    font-size: 0.8rem;
  }
}

.accordion {
  --bs-accordion-bg: $accordion-color;
  --bs-accordion-border-color: #aaaaaa;
  --bs-accordion-border-width: 1px;
  --bs-accordion-btn-bg: $accordion-color;
  --bs-accordion-active-bg: $accordion-color;
}
</style>