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
          class="accordion-button d-flex align-items-center gap-3"
          :class="{ collapsed: !sub.active }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#nested-collapse-${subAccordionId}-${subIndex}`"
          :aria-expanded="sub.active ? 'true' : 'false'"
          :aria-controls="`nested-collapse-${subAccordionId}-${subIndex}`"
          @click="logAccordionState(sub, subIndex)"
        >
          <font-awesome-icon
            :icon="sub.active ? 'minus' : 'plus'"
            :class="{ 'icon-minus': sub.active, 'icon-plus': !sub.active }"
          />
          <div class="subHeadingInfo">
            <span class="title">{{ sub.title }}</span>
            <div class="details">
              <span class="me-3">{{ sub.aulas }}</span>
              <span class="me-3">{{ sub.exercicios }}</span>
              <span class="me-3">{{ sub.materiais }}</span>
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
            :tabs="getTitles(subIndex)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItensAulas from "./ItensAulas.vue";

export default {
  name: "Aulas",
  components: { ItensAulas },
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
  methods: {
    logAccordionState(sub, subIndex) {
      console.log(
        `Acordeão ${subIndex} - Estado atual (sub.active):`,
        sub.active
      );
      console.log(`Acordeão ${subIndex} - Título:`, sub.title);
    },
    getTitles(index) {
      return [
        { title: `Aula ${index + 1}`, subtitle: " | 01:00:00" },
        { title: `Exercício ${index + 1}`, subtitle: " | 01:00:00" },
        { title: `Material ${index + 1}`, subtitle: " | 01:00:00" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
/* Mudança dos icones */

.accordion-button::after {
  display: none;
}

.icon-plus {
  font-size: 0.8rem;
  min-width: 16px;
  color: #000;
}

.icon-minus {
  font-size: 0.8rem;
  min-width: 16px;
  color: black;
}

.accordion-icon {
  font-size: 0.8rem;
  min-width: 16px;
  transition: transform 0.2s ease;
}

.accordion-button:not(.collapsed) .accordion-icon {
  color: #6e04c0;
}

.accordion-button {
  gap: 1rem;
  padding-left: 1.5rem;
}

.subHeadingInfo {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: #000;
  flex-grow: 1;

  .title {
    font-size: 1.2rem;
  }
  .details {
    font-size: 0.8rem;
    font-weight: 500;
  }
}

.accordion-body {
  background-color: #eccbfc;
}

.accordion-button:not(.collapsed) {
  background-color: #eccbfc;
  color: white;
}
</style>