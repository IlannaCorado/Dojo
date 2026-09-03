//Nome: Ilanna Corado    RA: 2649330
//Disciplina: Back-end
//Professora: 

//Atividade - 1


//registro de usuarios do sistema
const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];





// Questão 1 - Utilizando arrow functions, calcule o valor total de compras de cada usuário.
const comprasUsuarios = usuarios.map(({nome, compras}) => {

  const totalCompras = compras.reduce((total, valor) => total + valor, 0);

return ({nome, totalCompras});

});
console.log(comprasUsuarios);






//Questão 2 - Utilizando arrow functions, filtre apenas os usuários que estão ativos.
const usuariosAtivos = usuarios.filter(({ativo}) => ativo);

  for (user of usuariosAtivos){
    console.log(user.nome)
}




// Questão 3 - Liste apenas usuários com idade >= 18.
const usuarioMaior = usuarios.filter(({idade}) => idade >= 18);

  for (user of usuarioMaior){
    console.log(user.nome)
}





//Questão 4 -Determine qual usuário possui o maior total de compras.
let maiorCompra = 0
let maiorNome = ''

comprasUsuarios.forEach(user => {
  if(user.totalCompras > maiorCompra){
    maiorCompra = user.totalCompras
    maiorNome = user.nome
  }
});

console.log(`Quem fez a maior compra foi ${maiorNome} no valor de: ${maiorCompra}`)




//Questão 7 Crie uma função chamada gerarRelatorio. Ela deve retornar um objeto contendo:
// {
//  totalUsuarios: X,
//  usuariosAtivos: X,
//  usuariosInativos: X,
//  mediaIdade: X,
//  maiorComprador: "nome"
// }

const gerarRelatorio = () => {
  const quantUsuarios = usuarios.length;
  const usuariosAtivos = usuarios.filter(({ ativo }) => ativo).length;
  const usuariosInativos = usuarios.filter(({ ativo }) => ativo == false).length;

  const somaIdades = usuarios.reduce((total, {idade}) => total + idade, 0);
  const idadeMedia = somaIdades / usuarios.length;

  let maiorCompra = 0
  let maiorNome = ''

  comprasUsuarios.forEach(user => {
    if(user.totalCompras > maiorCompra){
      maiorCompra = user.totalCompras
      maiorNome = user.nome
  }
});

  return {
    totalUsuarios: quantUsuarios,
    usuariosAtivos: usuariosAtivos,
    usuariosInativos: usuariosInativos,
    mediaIdade: idadeMedia,
    maiorComprador: maiorNome,
    
  };
  
};

console.log(gerarRelatorio());




