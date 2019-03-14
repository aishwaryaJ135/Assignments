module.exports.array = function(arr) {
  return arr.map(x => Math.pow(x, 3));
};

//Count of elements >10 in the array 
module.exports.countArr =function(arr){ 
return arr.reduce((agg,cur)=>{
        if(cur>=10)
         agg++;
         return agg;
    },0);
};

module.exports.containsTen=function(arr)
{
  return arr.reduce((agg,cur)=>
{
  return agg || cur>=10;
},false);
}

module.exports.subArr=function(arr){
   return arr.filter(value=> {
    return value%3===0;
});};