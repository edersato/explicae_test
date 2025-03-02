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
              <span class="me-3"> {{ item.aulas }} </span>
              <span class="me-3"> {{ item.exercicios }} </span>
              <span class="me-3"> {{ item.materiais }} </span>
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
  methods: {
    getSubItemsMap() {
      return {
        contentLanguage: {
          "1. Interpretação de Textos": [
            {
              title: "Competência 01: Palavras, Imagem e Vida Social",
              aulas: "Aulas: 523 | 44h 59m",
              exercicios: "Exercícios: 62 | 23h 39m",
              materiais: "Materiais: 12 | 34h 03m",
            },
            {
              title: "Competência 06: Contexto e Função",
              aulas: "Aulas: 510 | 42h 24m",
              exercicios: "Exercícios: 90 | 53h 54m",
              materiais: "Materiais: 29 | 39h 03m",
            },
            {
              title: "Competência 07: Opiniões e Ponto de Vista",
              aulas: "Aulas: 131 | 10h 41m",
              exercicios: "Exercícios: 23 | 7h 27m",
              materiais: "Materiais: 09 | 10h 39m",
            },
            {
              title: "Competência 08: Diversidade Linguística",
              aulas: "Aulas: 29 | 02h 15m",
              exercicios: "Exercícios: 06 | 02h 27m",
              materiais: "Materiais: 03 | 02h 18m",
            },
          ],
        },
        contentGrammar: {
          "2. Gramática": [
            {
              title: "2.1 Fonologia",
              aulas: "Aulas: 07 | 01h 02m",
              exercicios: "Exercícios: 04 | 01h 36m",
              materiais: "Materiais: 02 | 01h 36m",
            },
            {
              title: "2.2 Morfologia",
              aulas: "Aulas: 31 | 05h 36m",
              exercicios: "Exercícios: 07 | 03h 06m",
              materiais: "Materiais: 10 | 02h 57m",
            },
            {
              title: "2.3 Sintaxe",
              aulas: "Aulas: 48 | 07h 54m",
              exercicios: "Exercícios: 16 | 06h 03m",
              materiais: "Materiais: 03 | 02h 18m",
            },
          ],
        },
      };
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
  
  
  // --bs-accordion-btn-active-icon: ;
  // --bs-accordion-btn-icon-width: ;
  // --bs-accordion-btn-icon: ;


;
}
</style>