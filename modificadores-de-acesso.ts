class Carro {
    private velocidadeAtual: number = 0;

    constructor (
        public marca: string,
        public modelo: string,
        private velocidadeMax: number = 220

    ){ }

    private alterarVelocidade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax){
            this.velocidadeMax = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0;
        }

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
