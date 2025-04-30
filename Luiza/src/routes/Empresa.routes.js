import EmpresaController from "../controller/Empresa.controller.js";
import {Router} from "express";

const empresaRouter = Router();

empresaRouter.get("/",EmpresaController.getEmpresa);

empresaRouter.post("/cadastra",EmpresaController.colocarEmpresa);

export default empresaRouter;