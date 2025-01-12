export function squareWithFor(array: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] ** 2);
    }
    return result;
  }
  
  export function squareWithForEach(array: number[]): number[] {
    const result: number[] = [];
    array.forEach((num) => result.push(num ** 2));
    return result;
  }
  
  export function concatenateWithJoin(array: string[]): string {
    return array.join(" ");
  }
  

  export function sortArray(array: string[]): string[] {
    return [...array].sort();
  }
  
  export function getFirstTwoElements(array: number[]): number[] {
    return array.slice(0, 2);
  }
  
  export function filterEvenNumbers(array: number[]): number[] {
    return array.filter((num) => num % 2 === 0);
  }