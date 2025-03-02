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

  data() {
    return {
      accordionLanguage: [
        {
          title: "1. Interpretação de Textos",
          aulas: "Aulas: 1193 | 100h 22m",
          exercicios: "Exercícios: 181 | 79h 12m",
          materiais: "Materiais: 53 | 86h 03m",
          active: true,
          subItems: [
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
      ],
      accordionGrammar: [
        {
          title: "2. Gramática",
          aulas: "Aulas: 86 | 14h 41m",
          exercicios: "Exercícios: 27 | 10h 45m",
          materiais: "Materiais: 10 | 10h 00m",
          active: false,
          subItems: [
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
}
</style>