interface Usuario 
{
    nome: string;
    email: string;
    address?: string;
}

function getUsuario(): Usuario  
{
    return {
        nome: 'Lorynn',
        email: 'lorynn@gmail.com'
    }
}

function setUsuario(usuario: Usuario)
{
    //code

}