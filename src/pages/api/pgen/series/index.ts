/* IMPORTANT: this file ***IS SAFE*** to edit, only written first time "prisma generate" is ran */
import type { NextApiHandler } from 'next'
import { prisma, useMiddleware } from '@/pgen/backend'

const handler: NextApiHandler = async (req, res) => {
  // method, operation, and args should all be validated in middleware
  const method = req.method
  const operation = req.query.op
  const args = req.body
  if (method === 'POST') {
    if (operation === 'create') return res.status(201).send(await prisma.series.create(args))

    return res.status(201).send(await prisma.series.upsert(args))
  }

  if (method === 'GET') {
    if (operation === 'aggregate') return res.status(200).send(await prisma.series.aggregate(args))

    if (operation === 'findFirstOrThrow') return res.status(200).send(await prisma.series.findFirstOrThrow(args))
    if (operation === 'findMany') return res.status(200).send(await prisma.series.findMany(args))

    if (operation === 'findUnique') return res.status(200).send(await prisma.series.findUnique(args))
    if (operation === 'findUniqueOrThrow') return res.status(200).send(await prisma.series.findUniqueOrThrow(args))
    if (operation === 'groupBy') return res.status(200).send(await prisma.series.groupBy(args))
    return res.status(200).send(await prisma.series.findFirst(args))
  }

  if (method === 'PUT') {
    if (operation === 'update') return res.status(200).send(await prisma.series.update(args))
    if (operation === 'updateMany') return res.status(200).send(await prisma.series.updateMany(args))
    return res.status(200).send(await prisma.series.upsert(args))
  }

  if (method === 'DELETE') {
    if (operation === 'delete') return res.status(200).send(await prisma.series.delete(args))
    return res.status(200).send(await prisma.series.deleteMany(args))
  }

  // middleware performs all checks necessary to ensure one of the above conditions is met, or handles it otherwise
  return res.status(500).send("MIDDLEWARE MALFUNCTION, THIS SHOULDN'T BE POSSIBLE")
}

export default useMiddleware({ model: 'Series', handler })
