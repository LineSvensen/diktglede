export default {
  name: 'testimonial',
  title: 'Generelle kundeanmeldelser',
  type: 'document',
  fields: [
    {name: 'author', title: 'Navn', type: 'string'},
    {name: 'quote', title: 'Sitat', type: 'text', rows: 4},
    {name: 'visible', title: 'Vis på siden', type: 'boolean', initialValue: true},
  ],
}
