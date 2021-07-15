class Data {
    public dia: number;
    mes: number;
    ano: number;

    //tambme pode ser declarada direto no cosntrutor
   //constructor (public dia: number, public mes: number, public ano: number = 1970)
    constructor(dia: number, mes: number, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1);//nesse caso utiliza o ano default 1970
