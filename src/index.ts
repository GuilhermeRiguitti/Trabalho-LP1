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