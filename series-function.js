function fibonacciSeries(num){
    //ei line ta dewa hoiche cz amra kuno karone string likhle eita output asbe
    if(typeof num!='number'){
        return 'please give a number'
    }
    const fibo=[0,1]
    for(i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

    

const fiboSeries=fibonacciSeries(12);
console.log(fiboSeries);
//