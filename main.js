const { compileFunction } = require('vm');
const arithmetic=require('./arithmetic');
const fs=require('fs');
const a=10;
const b=5;
const sum=arithmetic.add(a,b);
const difference=arithmetic.subtract(a,b);
const product=arithmetic.multiply(a,b);
const quotient=arithmetic.divide(a,b);
console.log(`Difference:$(difference)`);
console.log(`Product:$(product)`);
console.log(`Quotient:$(quotient)`);
const results=`
Sum:${sum}
Difference:${difference}
Product:${product}
Quotient:${quotient}
`;
fs.writeFile('result.txt',results,(err)=>{
    if(err){
        console.error('Error writing to file',err);
    }else{
        console.log('Results written to results.txt');
    }
});
fs.readFile('result.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Error reading from file',err);
    }else{
        console.log('Contents of results.txt:');
        console.log(data);
    }
});