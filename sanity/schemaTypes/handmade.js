export default {
  name: 'handmade',
  title: 'Ting med dikt på',
  type: 'document',
  fields: [
    {
      name: 'item',
      title: 'Håndlagde ting',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Tittel', type: 'string'},
            {name: 'description', title: 'Beskrivelse', type: 'text', rows: 3},
            {name: 'price', title: 'Pris (kr)', type: 'number'},
            {
              name: 'images',
              title: 'Bilder',
              type: 'array',
              of: [{type: 'image', options: {hotspot: true}}],
            },
          ],
          preview: {
            select: {title: 'title', media: 'images.0'},
            prepare({title, media}) {
              return {title: title || 'Uten tittel', media}
            },
          },
        },
      ],
    },
  ],
}
