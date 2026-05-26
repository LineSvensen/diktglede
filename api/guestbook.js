import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '6ds9sc55',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Kun POST er lov'})
  }

  const {name, message} = req.body

  if (!name || !message) {
    return res.status(400).json({message: 'Mangler navn eller melding'})
  }

  await client.create({
    _type: 'guestbookMessage',
    name,
    message,
    approved: false,
  })

  return res.status(200).json({message: 'Hilsen lagret'})
}
