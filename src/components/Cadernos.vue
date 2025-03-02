<template>
  <div class="accordion" :id="accordionId">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
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
};
</script>

<style lang="scss" scoped>

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
</style>
