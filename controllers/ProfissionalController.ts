import { PrismaClient, Profissional } from '@prisma/client'
import { Request, Response } from 'express'
type ProfissionalType = Pick<Profissional, "nome" | "email" | "situacao" | "tipoProfissionalId" | "telefone">
const prisma = new PrismaClient()

export default {
  async create(req: Request, res: Response) {
    const { nome, telefone, email, situacao, tipoProfissionalId }: ProfissionalType = req.body
    await prisma.profissional.create({
      data: {
        nome: nome,
        email: email,
        situacao: situacao,
        tipoProfissionalId: tipoProfissionalId,
        telefone: telefone
      },
    })
    return res.json({ message: 'Profissional criado com sucesso' })
  },
  async findAll(req: Request, res: Response) {
    const profissionais = await prisma.profissional.findMany({
      select: {
        nome: true,
        tipoProfissional: {
          select: {
            descricao: true
          }
        }
      }
    })
    return res.json(profissionais)
  }

}