export default {
  name: 'aboutMe',
  title: 'Om meg',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Om meg tekst',
      type: 'text',
      rows: 8,
    },
    {
      name: 'image',
      title: 'Hovedbilde',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt-tekst',
          type: 'string',
        },
      ],
    },
  ],
}
