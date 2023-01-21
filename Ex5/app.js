const somaTudo = (...numeros) => {
    let total = 0;
    for (let num of numeros) {
      total += num;
    }
    return total;
  }
  
  const resultado = somaTudo(1, 2, 3, 4);
  console.log(resultado); 
  