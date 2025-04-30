import {Empresa} from "../model/Empresa.model.js";
import { v4 as uuid } from "uuid";

class EmpresaController{
    getEmpresa(req,res){
        res.status(200).json({
            Empresas: Empresa.db_empresa
        });
    }

    colocarEmpresa(req, res){
        const {nome,cnpj,dono,ramo,endereco,consumo} = req.body;

        if(!nome || !cnpj || !dono || !ramo || !endereco || !consumo){
            return res.status(400).json({
                message: "Complete todos os dados"
            });
        }

        const novaEmpresa = new Empresa(uuid,nome,cnpj,dono,ramo,endereco,consumo);

        novaEmpresa.salvarempresa(novaEmpresa);

        res.status(201).json({
            message: "Criado com sucesso", empresa: novaEmpresa
        });
    }
}
 export default new EmpresaController();