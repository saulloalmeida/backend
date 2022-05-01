const { Router } = require("express");
const ProfissionalController = require("./controllers/ProfissionalController");
const TipoProfissionalController = require("./controllers/TipoProfissionalController");

const router = Router()

// Rotas para Profissionais
router.get('/profissionais', ProfissionalController.findAll)
router.get('/profissionais/total', ProfissionalController.totalDeProfissionais)
router.post('/profissional', ProfissionalController.create)
router.delete('/profissional/:id', ProfissionalController.delete)

// Rotas para Profissoes
router.get('/profissoes', TipoProfissionalController.findAll)
router.get('/profissoes/total', TipoProfissionalController.totalDeProfissoes)
router.post('/profissao', TipoProfissionalController.create)
router.delete('/profissao/:id', TipoProfissionalController.delete)

module.exports = router;

