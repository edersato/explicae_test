<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="form-check my-3">
      <input
        class="form-check-input"
        type="checkbox"
        :id="`${groupId}-${index}`"
        :value="item.value"
        v-model="selected"
      />
      <div class="d-flex justify-content-between mx-3">
        <label class="form-check-label" :for="`${groupId}-${index}`">
          {{ item.label }}
        </label>
        <span>{{ item.time }}</span>
      </div>
    </div>
    <div class="progress my-3">
      <div
        class="progress-bar"
        role="progressbar"
        :style="progressBarStyle"
        :aria-valuenow="progressPercentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progressPercentage }}%
      </div>
    </div>
    <div
      v-if="showToast"
      class="toast show position-fixed top-0 end-0 m-3"
      style="z-index: 9999;"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Parabéns</strong>
        <button type="button" class="btn-close" @click="showToast = false"></button>
      </div>
      <div class="toast-body">
        Seção concluída com sucesso!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxAula",
  props: {
    items: { type: Array, required: true },
    groupId: { type: String, required: true },
  },
  data() {
    return {
      selected: [],
      showToast: false,
    };
  },
  computed: {
    progressPercentage() {
      const count = Math.min(this.selected.length, 5);
      return (count / 5) * 100;
    },
    progressBarStyle() {
      return {
        width: `${this.progressPercentage}%`,
        transition: "width 2s, background-color 2s",
        backgroundColor: this.progressPercentage < 100 ? "#6f42c1" : "#198754",
      };
    },
  },
  watch: {
    selected(newVal) {
      this.$store.commit("updateSelectedCount", newVal.length);
      if (newVal.length === 5 && !this.showToast) {
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 7000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  border: 2.5px solid black;
  border-radius: 0.5px;
  background-color: #6f42c1;
}
</style>