const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProfissionalController {
  async create(req, res) {
    const { nome, telefone, email, situacao, tipoProfissionalId } = req.body;
    await prisma.profissional.create({
      data: {
        nome: nome,
        email: email,
        situacao: situacao,
        tipoProfissionalId: tipoProfissionalId,
        telefone: telefone,
      },
    });
    return res.json({ message: "Profissional criado com sucesso" });
  }
  async findAll(req, res) {
    const profissionais = await prisma.profissional.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        createdAt: true,
        tipoProfissional: {
          select: {
            descricao: true,
          },
        },
      },
    });
    return res.json(profissionais);
  }
  async delete(req, res) {
    const { id } = req.params;
    await prisma.profissional.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json({ message: "Profissional deletado com sucesso" });
  }
  async totalDeProfissionais(req, res) {
    const total = await prisma.profissional.count();
    return res.json({ total });
  }
}
module.exports = new ProfissionalController();
