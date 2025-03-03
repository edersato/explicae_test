<template>
  <div id="home">
    <Cadernos
      class="my-2"
      :items="accordionLanguage"
      accordionId="contentLanguage"
    />
    <Cadernos
      class="my-2"
      :items="accordionGrammar"
      accordionId="contentGrammar"
    />
  </div>
</template>

<script>
import Cadernos from "../components/Cadernos.vue";

export default {
  components: {
    Cadernos,
  },
  computed: {
    accordionLanguage() {
      return [
        {
          title: "1. Interpretação de Textos",
          aulas: "Aulas: 1193 | 100h 22m",
          exercicios: "Exercícios: 181 | 79h 12m",
          materiais: "Materiais: 53 | 86h 03m",
          active: true,
        },
      ];
    },
    accordionGrammar() {
      return [
        {
          title: "2. Gramática",
          aulas: "Aulas: 86 | 14h 41m",
          exercicios: "Exercícios: 27 | 10h 45m",
          materiais: "Materiais: 10 | 10h 00m",
          active: false,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
}
</style>