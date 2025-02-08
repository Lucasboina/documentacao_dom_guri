import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'DomGuri',
  description: 'Documentação site domGuri',

  themeConfig: {
    nav: [
      { text: 'Docs', link: '/1_introducao.md' },

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
          { text: '1. Introdução', link: '/1_introducao.md' },
          { text: '2. Descrição ', link: '/2_descricao.md' },
          { text: '3. Principais Recursos e Funcionalidades ', link: '/3_recursos.md' },
          { text: '4. Diagrama de Caso de Uso', link: '/4_ diagrama_usos.md' },
          { text: '5. Diagrama de Classes', link: '/5_diagrama_classes.md' },
          { text: '6. Protótipos de Telas', link: '/6_prototipo.md' },
          { text: '7. Cronograma e Entrega', link: '/7_cronograma.md' },
          { text: '8. Riscos e Mitigação' , link: '/8_riscos.md' },
          { text: '9. Custos e Orçamento', link: '/9_custos.md' },
          { text: '10. Considerações Finais', link: '/10_considaracoes.md' },
          // ...
        ],
      },
    ],
  },
});
