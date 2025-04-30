//
export class Empresa {
    constuctor(id,nome,cnpj,dono,ramo,endereco,consumo){
        this.id = id;
        this.nome= nome;
        this.cnpj = cnpj;
        this.dono = dono;
        this.ramo = ramo;
        this.endereco = endereco;
        this.consumo = consumo;
    }

    //banco de dados mocado
    static db_empresa = [];

    salvarempresa(objempresa){
        Empresa.db_empresa.push(objempresa);//coloca no bd
    }
}