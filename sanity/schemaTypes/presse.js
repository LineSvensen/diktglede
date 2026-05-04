export default {
  name: 'presse',
  title: 'Presse',
  type: 'document',
  fields: [
    {
      name: 'seksjoner',
      title: 'Seksjoner',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Tittel', type: 'string'},
            {name: 'description', title: 'Tekst', type: 'text', rows: 4},
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Bilder', value: 'bilder'},
                  {title: 'Video', value: 'video'},
                ],
                layout: 'radio',
              },
            },
            {
              name: 'images',
              title: 'Bilder',
              type: 'array',
              of: [{type: 'image', options: {hotspot: true}}],
              hidden: ({parent}) => parent?.type !== 'bilder',
            },
            {
              name: 'videos',
              title: 'Videoer',
              type: 'array',
              of: [{type: 'file', options: {accept: 'video/*'}}],
              hidden: ({parent}) => parent?.type !== 'video',
            },
          ],
          preview: {
            select: {title: 'title', type: 'type'},
            prepare({title, type}) {
              return {title: title || 'Uten tittel', subtitle: type}
            },
          },
        },
      ],
    },
  ],
}
