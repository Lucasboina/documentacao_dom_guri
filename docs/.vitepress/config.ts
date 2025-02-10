import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'pt-BR',
  title: 'Dom Guri',
  description: 'Docs site DomGuri',

  themeConfig: {
    nav: [
      { text: 'Docs', link: '/1_introducao.md' },
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: "1. Introdução", link: '1_introducao'},
          { text: "2. Descrição", link: '/2_descricao'},
          { text: "3. Recursos", link: '/3_recursos'},
          { text: "4. Diagrama caso de usos", link: '/4_diagrama_usos'},
          { text: "5. Diagrama de classes", link: '/5_diagrama_classes'},
          { text: "6. Prototipo", link: '/6_prototipo'},
          { text: "7. Cronograma", link: '/7_cronograma'},
          { text: "8. Riscos", link: '/8_riscos'},
          { text: "9. Custos", link: '/9_custos'},
          { text: "10. Considerações finais", link: '/10_consideracoes'}
          // ...
        ],
      },
    ],
  },
});
