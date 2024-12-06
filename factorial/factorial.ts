function factorial(n: number): number {
    let result = n;
    if (n === 0 || n === 1) {
      return 1;
    }

    if (n < 0){
      return 0;
    }
    
    while (n > 1) {
      n--;
      result *= n;
    }
    return result;
  }
  
  export default factorial;