const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TipoProfissionalController {
  async findAll(req, res) {
    const tipos = await prisma.tipoProfissional.findMany();
    return res.json(tipos);
  }
  async create(req, res) {
    const { descricao } = req.body;
    await prisma.tipoProfissional.create({
      data: {
        descricao: descricao,
      },
    });
    return res.json({ message: "Profissão criada com sucesso" });
  }
  async delete(req, res) {
    const { id } = req.params;
    const deletedItem = await prisma.tipoProfissional.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json({ message: "Profissão deletada com sucesso" });
  }
  async totalDeProfissoes(req, res) {
    const total = await prisma.tipoProfissional.count();
    return res.json({ total });
  }
}
module.exports = new TipoProfissionalController();
