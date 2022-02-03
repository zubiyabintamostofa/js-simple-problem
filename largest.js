function largestElement(num){
    let largest=0;
    for(let i=0;i<num.length;i++){
        const element=num[i];
        if(element>largest){
            largest=element;
        }
        
    }return largest;
}
const ages=[12,34,56,123,321];
const oldest=largestElement(ages);
console.log(oldest);