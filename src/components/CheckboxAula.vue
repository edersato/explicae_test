<!-- components/CheckboxAula.vue -->
<template>
    <div>
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="form-check"
      >
        <input
          type="checkbox"
          class="form-check-input"
          :id="`checkbox-${groupId}-${index}`"
          :value="item.value"
          v-model="selectedValues"
        />
        <label 
          class="form-check-label" 
          :for="`checkbox-${groupId}-${index}`"
        >
          {{ item.label }}
        </label>
      </div>
      
      <span class="d-block mt-2">
        {{ formattedSelectedCount }} de {{ formattedTotalItems }}
      </span>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    props: {
      items: {
        type: Array,
        required: true,
        validator: (value) => value.every(item => 'value' in item && 'label' in item)
      },
      groupId: { // Nova prop
        type: String,
        required: true
      }
    },
    setup(props) {
      const store = useStore();
  
      const selectedValues = computed({
        get: () => store.state.selectedCheckboxes[props.groupId] || [],
        set: (value) => store.dispatch('updateSelectedCheckboxes', {
          groupId: props.groupId,
          values: value
        })
      });
  
      const formattedSelectedCount = computed(() => {
        return store.getters.selectedCount(props.groupId).toString().padStart(2, '0');
      });
  
      const formattedTotalItems = computed(() => {
        return props.items.length.toString().padStart(2, '0');
      });
  
      return { selectedValues, formattedSelectedCount, formattedTotalItems };
    }
  };
  </script>