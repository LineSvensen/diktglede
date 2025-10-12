// sanity/schemas/book.js
export default {
  name: 'book',
  title: 'Diktbok',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL-navn (slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'shortDescription',
      title: 'Kort beskrivelse',
      type: 'string',
      description: 'En kort beskrivelse til bruk på produktkort eller oversikter.',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'longDescription',
      title: 'Lang beskrivelse',
      type: 'text',
      rows: 5,
      description: 'Full beskrivelse som vises på boksiden.',
    },
    {
      name: 'year',
      title: 'Utgivelsesår',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()),
    },

    {
      name: 'cover',
      title: 'Forsidebilde',
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
      name: 'gallery',
      title: 'Galleri (ekstra bilder)',
      type: 'array',
      of: [
        {
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
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'price',
      title: 'Pris',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    },
    {
      name: 'available',
      title: 'Tilgjengelig for salg',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
