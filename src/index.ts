function Greet(nome: string, nascimento: string ) : void {
    var [dia, mes, ano] = nascimento.split('/');
    console.log('Olá me chamo ' + nome + ' nasci no dia '  + dia + ' do mes '+ mes +' do ano de ' + 
    ano + '!')   
}

Greet('Guilherme','10/03/2020')

function tipoVariavel(variavel: any) : void {
    console.log (typeof variavel)
}

tipoVariavel(10)

enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
    }
            
type filme = { 
    nome: string, 
    lancamento: string, 
    genero: GENERO, 
    avaliacao: number | null
} 

const filme1: filme = {
    nome: "dev",
    lancamento: "10/04/2020",
    genero: GENERO.ACAO,
    avaliacao: 10
}

console.log(filme1)

