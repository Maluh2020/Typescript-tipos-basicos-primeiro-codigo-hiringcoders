let altura: number | null = 1.7;
altura = null;

type Contato = {
    nome: string;
    telefone: string;
    telefone2?: string;// o pontp de ? indica que o campo é opcional
}

const contato: Contato = {
    nome: 'Haiders',
    telefone: '45678900',
    telefone2: '789044567',
}
