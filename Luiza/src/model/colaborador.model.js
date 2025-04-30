//
export class Colaborador {
    constuctor(id,nome,cpf,empresa, cargo,salario, pontuacao){
        this.id = id;
        this.nome= nome;
        this.cpf = cpf;
        this.empresa = empresa;
        this.cargo = cargo;
        this.salario = salario;
        this.pontuacao = pontuacao;
    }

    //banco de dados mocado
    static db_colaborador = [];

    salvarColaborador(objColaborador){
        Colaborador.db_colaborador.push(objColaborador);//coloca no bd
    }


}