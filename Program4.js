function myarr(arr){
    this.arr=arr;
    this.slice=function(index){
        return [this.arr.slice(0,index), this.arr.slice(index+1),this.arr.slice(index)];
    }
}
let arr = new myarr([1,2,3,4,5,6,7,8,9,10]);
let array=arr.slice(4);
console.log(array);