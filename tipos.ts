//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 25;

const notaProva: number = 7.0;

//String
const nome: string = "Malu Job Haiders";

//Array
const numerosPares: number[] = [2, 4, 6, 8,];
const idades: Array<number> = [18, 23, 25, 46];

//Tuple
let Jogadores: [string, string, string, number];
Jogadores = ['Fernando', 'Paula', 'Dani', 10];

//Enum - consigo definir alguns valores e utilza los como objeto
enum statusAprovacao {
    Aprovado = '01',
    Pendente = '02',
    Reprovado = '03'
}
const statusAtual: statusAprovacao = statusAprovacao.Aprovado;

//Any - qualquer coisa
const retornoApi: any[] = [125, 'Maria', true];
const retornoApi2: any = {
    //...... aceita qualquer coisa e deve ser usado com muita cautela
};

//Void - utilizado em funções, não retorna nada
function printarTela(msg: string): void {
    console.log(msg);
}

//Null e Indefined
const u: undefined = undefined;
const n: null = null;

//Object - Não é um tipo primitivo
function criar(objeto: object){
    //Não aceita um tipo primitivo por exemplo uma string.
}

criar({
    propriedade: 1,
})

//Never 
function loopInfinito(): never {
    while(true){};
}

//Pra erro
function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(): never {
    return erro('Algo falhou');
}

//Union Types - permite ter mais de um tipo
function exibirNota(nota: number | string | boolean) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(9.5);
exibirNota(true);

//pode ser usado com variável tambem
const nota: string | boolean = true;

//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Giganivalda',
    sobrenome: 'Agripina',
    dataNascimento: new Date()
}, {
    nome: 'Lorynn',
    sobrenome: 'Rawzyhemberg',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[])
{
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}


