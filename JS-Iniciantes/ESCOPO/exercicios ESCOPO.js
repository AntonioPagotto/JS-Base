// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
   }
   console.log(var, marca, portas);

   /*R:
   var é palavra reservada.....
   marca não vaza(const nao sai do escopo).... deu pau
   portas..... let permanece dentro do escopo do bloco, não vaza
   */


