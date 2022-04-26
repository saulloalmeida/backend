import { PrismaClient, TipoProfissional } from '@prisma/client'
import { Request, Response } from 'express'
type TipoProfissionalType = Pick<TipoProfissional, "descricao">
const prisma = new PrismaClient()

export default {
  async findAll(req: Request, res: Response) {
    const tipos = await prisma.tipoProfissional.findMany()
    return res.json(tipos)
  },
  async create(req: Request, res: Response) {
    const { descricao }: TipoProfissionalType = req.body
    await prisma.tipoProfissional.create({
      data: {
        descricao: descricao,
      }
    })
    return res.json({ message: 'Tipo de Profissional criado com sucesso' })
  }
}