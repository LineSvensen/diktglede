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
    {
      name: 'moreBio',
      title: 'Mer tekst om meg',
      type: 'text',
      rows: 8,
    },
    {
      name: 'imageTwo',
      title: 'Bilde to',
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
    {
      name: 'bioThree',
      title: 'Tekst tre',
      type: 'text',
      rows: 8,
    },
    {
      name: 'imageThree',
      title: 'Bilde tre',
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
    {
      name: 'bioFour',
      title: 'Tekst fire',
      type: 'text',
      rows: 8,
    },
    {
      name: 'imageFour',
      title: 'Bilde fire',
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
    {
      name: 'bioFive',
      title: 'Tekst fem',
      type: 'text',
      rows: 8,
    },
    {
      name: 'imageFive',
      title: 'Bilde fem',
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
