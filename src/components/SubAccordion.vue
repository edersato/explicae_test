<template>
  <div class="accordion" :id="subAccordionId">
    <div class="accordion-item" v-for="(sub, subIndex) in items" :key="subIndex">
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
          {{ sub.text }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SubAccordion",
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
};
</script>
  
  <style lang="scss" scoped>
/* Estilo para manter o botão ativo com a cor roxa */

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
  background-color: #c561c5 !important;
  color: white;
}
</style>
  