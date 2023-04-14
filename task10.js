//str='ram';
//newstr = '';
    //for(i=str.length-1;i>=0;i--)
    //{
        //newstr = newstr+str[i];
    //}
//console.log(newstr);

const numbers=[1,3,0,24,19];
numbers.sort(function(a,b)
{
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
});
console.log(numbers[numbers.length - 2]);