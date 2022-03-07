// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  dist: '../../dist/apps/website',
  buildOptions: {
    site: 'https://eloy.co',
  },
  markdownOptions: {
    render: [
      '@astrojs/markdown-remark',
      {
        rehypePlugins: [
          'rehype-slug',
          [
            'rehype-autolink-headings',
            {
              behavior: 'prepend',
              content: {
                type: 'element',
                tagName: 'span',
                properties: { className: ['heading-link'] },
                children: [
                  {
                    type: 'element',
                    tagName: 'img',
                    properties: { src: '/assets/link.svg' },
                    children: [],
                  },
                ],
              },
            },
          ],
          [
            'rehype-external-links',
            {
              content: {
                type: 'element',
                tagName: 'img',
                properties: {
                  src: '/assets/external-link.svg',
                  alt: 'External link icon',
                },
                children: [],
              },
              contentProperties: { className: ['external-link-icon'] },
            },
          ],
        ],
      },
    ],
  },
});
