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

const camisetaBuscada = estoque.filter((c) => {
 return c.perfil == "F";
});

//console.log(camisetaBuscada);

console.log("camisetas de polo feminina em estoque:");

camisetaBuscada.forEach(CB => {
    console.log(`Cor: ${CB.cor} Quantidade(s): ${CB.quantidade}`);
});

