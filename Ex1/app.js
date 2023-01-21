function procuraMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      console.log("Não é possível encontrar");
      return;
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    console.log("Menor valor: " + min);
    console.log("Maior valor: " + max);
  }

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2,-2,-2,-2]); 
procuraMinMax([20,10, 30]);
