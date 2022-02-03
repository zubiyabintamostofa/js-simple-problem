function fibonacciSeries(num){
    const fibo=[0,1]
    for(i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const fiboSeries=fibonacciSeries(13);
console.log(fiboSeries);