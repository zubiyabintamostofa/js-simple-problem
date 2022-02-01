const business=430;
const minister=600;
const army=799;
// if(business>minister&&business>army){
//     console.log('vab kom dekha');
// }
// else if(minister>business&&minister>army){
//     console.log('chup thak')
// }
// else{console.log('armybest')}

var max=Math.max(business,minister,army);
console.log('larger is ',max);
//function er niyom

function findlargest(first,second)
{
    if(first>second){
        return first;
    }
    else{ return second;
    }
}
const largest=findlargest(667,980);
console.log('paichi boro da',largest)
