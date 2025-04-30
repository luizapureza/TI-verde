//
export class Estado {
    constuctor(id,nome,cnpj,dono,ramo,endereco,meta){
        this.id = id;
        this.nome= nome;
        this.cnpj = cnpj;
        this.dono = dono;
        this.ramo = ramo;
        this.endereco = endereco;
        this.meta = meta;
    }

    //banco de dados mocado
    static db_empresa = [];

    salvarempresa(objempresa){
        Empresa.db_empresa.push(objempresa);//coloca no bd
    }
}