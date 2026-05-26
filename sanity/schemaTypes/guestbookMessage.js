export default {
  name: 'guestbookMessage',
  title: 'Gjestebok',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Melding',
      type: 'text',
    },
    {
      name: 'approved',
      title: 'Godkjent',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'reply',
      title: 'Svar fra Marit',
      type: 'text',
      rows: 3,
    },
  ],
}
