import { Router } from "express";
import ProfissionalController from "./controllers/ProfissionalController";
import TipoProfissionalController from "./controllers/TipoProfissionalController";

const router = Router()


router.get('/profissional', ProfissionalController.findAll)
router.post('/profissional', ProfissionalController.create)


router.get('/tipo-profissional', TipoProfissionalController.findAll)
router.post('/tipo-profissional', TipoProfissionalController.create)

export { router };

