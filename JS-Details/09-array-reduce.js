const numeros = [5, 10, 14];

const encontrado = numeros.filter((n) => {
 return n == 10;
});

//console.log(encontrado);

const estoque = [
   {
    descricao : "camisa polo",
    cor : "rosa torolho",
    perfil : "M",
    quantidade : 12
   },
   {
    descricao : "camisa polo",
    cor : "verde torolho",
    perfil : "M",
    quantidade : 17
   },
   {
    descricao : "camisa polo",
    cor : "vermelho torolho",
    perfil : "F",
    quantidade : 7
   },
   {
    descricao : "camisa polo",
    cor : "azul torolho",
    perfil : "F",
    quantidade : 23
   }   
];

let totCamisetasEmEstoque = estoque.reduce((total, produto) => {
  return total + produto.quantidade;
}, 0);

console.log(`Total de camisetas em estoque: ${totCamisetasEmEstoque}`);