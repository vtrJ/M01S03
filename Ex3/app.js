const concatena = (arr1, arr2) => {
    return [...arr1, ...arr2];
  }
  
  const novoArray = concatena([1, 2, 3], [4, 5, 6]);
  console.log(novoArray);