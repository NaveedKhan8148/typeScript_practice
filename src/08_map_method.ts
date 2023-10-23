// Map method

// const numbers : number[] =[34,545,6,43,2,4]
// const numberToString:number[]=numbers.map((val:number)=>{
//    return val += val
//  })

//  console.log(numberToString)



// Reduce method

const numbers: number[] = [34, 545, 6, 43, 2, 4];
const sum: number = numbers.reduce((acc, val) => acc + val, 0);
const average: number = sum / numbers.length;
console.log(average);
