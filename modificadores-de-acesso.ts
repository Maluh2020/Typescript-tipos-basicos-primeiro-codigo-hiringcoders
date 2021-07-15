class Carro {
    private velocidadeAtual: number = 0;

    constructor (
        public marca: string,
        public modelo: string,
        private velocidadeMax: number = 220

    ){ }

    private alterarVelocidade(delta: number){
        //validações de aceleração e frenagem
        //this.velecidadeAtual = xxx;

    }

    acelerar(){
        this.alterarVelocidade(5);
    }

    frear(){
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Porshe', 'Cayeni', 300);
carro.acelerar();
carro.frear();
