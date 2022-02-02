const num=[22,5,34,93,33,43,35]
let sum=0;
for(let i=0;i<num.length;i++){
   const element=num[i];
   sum=sum+element;

}
console.log(sum);
///function e jug er niyom

function arrayTotal(number)
{
    let sum=0;
for(let i=0;i<number.length;i++)
{
    const element=number[i];
   sum=sum+element; 
  
}
return sum;
} 
const total=arrayTotal([66,35,73]);
console.log(total)
