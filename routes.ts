import { Router } from "express";
import ProfissionalController from "./controllers/ProfissionalController";
import TipoProfissionalController from "./controllers/TipoProfissionalController";

const router = Router()


router.get('/profissionais', ProfissionalController.findAll)
router.post('/profissional', ProfissionalController.create)
router.delete('/profissional/:id', ProfissionalController.delete)


router.get('/profissoes', TipoProfissionalController.findAll)
router.post('/profissao', TipoProfissionalController.create)
router.delete('/profissao/:id', TipoProfissionalController.delete)


export { router };

