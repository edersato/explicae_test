<template>
  <div class="accordion" :id="subAccordionId">
    <div
      class="accordion-item"
      v-for="(sub, subIndex) in items"
      :key="subIndex"
    >
      <h2
        class="accordion-header"
        :id="`nested-heading-${subAccordionId}-${subIndex}`"
      >
        <button
          class="accordion-button"
          :class="{ collapsed: !sub.active }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#nested-collapse-${subAccordionId}-${subIndex}`"
          :aria-expanded="sub.active ? 'true' : 'false'"
          :aria-controls="`#nested-collapse-${subAccordionId}-${subIndex}`"
        >
          <div class="subHeadingInfo">
            <span class="title"> {{ sub.title }} </span>
            <div class="details">
              <span class="me-3"> {{ sub.aulas }} </span>
              <span class="me-3"> {{ sub.exercicios }} </span>
              <span class="me-3"> {{ sub.materiais }} </span>
            </div>
          </div>
        </button>
      </h2>
      <div
        :id="`nested-collapse-${subAccordionId}-${subIndex}`"
        class="accordion-collapse collapse"
        :class="{ show: sub.active }"
        :aria-labelledby="`nested-heading-${subAccordionId}-${subIndex}`"
        :data-bs-parent="`#${subAccordionId}`"
      >
        <div class="accordion-body">
          <ItensAulas
            :componentId="`tabs-${subAccordionId}-${subIndex}`"
            :tabs="getTitleForSubAccordion(subIndex)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import ItensAulas from './ItensAulas.vue';

export default {
  name: "Aulas",

  components: {ItensAulas},

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    subAccordionId: {
      type: String,
      default: "subAccordionId",
    },
  },

  data() {
    return {
      subAccordionTitles: this.generateTitlesDaata()
    };
  },

  methods: {
    generateTitlesDaata() {
      return this.items.map((_, index) => [
        { title: `Aula ${index + 1}`, content: `Conteúdo da Aula ${index + 1}` },
        { title: `Exercício ${index + 1}`, content: `Conteúdo da Exercício ${index + 1}` },
        { title: `Material ${index + 1}`, content: `Conteúdo da Material ${index + 1}` },
      ]);
    },

    getTitleForSubAccordion(subIndex) {
      return this.subAccordionTitles[subIndex] || [];
    }
  }
};
</script>
  
  <style lang="scss" scoped>
.subHeadingInfo {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: #000;

  .title {
    font-size: 1.2rem;
  }
  .details {
    font-size: 0.8rem;
    font-weight: 500;
  }
}

.accordion-button:not(.collapsed) {
  background-color: #c28cc2 !important;
  color: white;
}
</style>
  