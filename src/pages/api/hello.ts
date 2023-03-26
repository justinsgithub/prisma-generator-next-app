/* IMPORTANT: this file ***IS SAFE*** to edit, only written first time "prisma generate" is ran */
import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  return res.status(200).send("hello")
}

export default handler
