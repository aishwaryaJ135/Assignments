let Student=[{id:1,name:"ka"},{id:2,name:"kaie"}];
let res=Student.find(value=>
{
    if(value.id===2)
    return value.name;
}
);
console.log(res);