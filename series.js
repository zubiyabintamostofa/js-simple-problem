const fibo=[0,1]
for(i=2;i<=10;i++){
    //ith=(i-1)th+(i-2)th
    fibo[i]=fibo[i-1]+fibo[i-2];

}
console.log(fibo)