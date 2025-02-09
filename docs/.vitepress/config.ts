import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Documentação', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: "introdução", link: '1_introducao'},
          { text: "descrição", link: '/2_descricao'},
          { text: "recursos", link: '/3_recursos'},
          { text: "diagrama usos", link: '/4_diagrama_usos'},
          { text: "diagrama classes", link: '/5_diagrama_classes'},
          { text: "prototipo", link: '/6_prototipo'},
          { text: "cronograma", link: '/7_cronograma'},
          { text: "riscos", link: '/8_riscos'},
          { text: "custos", link: '/9_custos'},
          { text: "considerações", link: '/10_consideracoes'}
          // ...
        ],
      },
    ],
  },
});
