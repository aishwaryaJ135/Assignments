/**
 * Promises
 */

 function printer(){
     console.log('1');
     setTimeout(()=>{
         console.log('In timer1');
     },2);
     setTimeout(()=>{
        console.log('In timer2');
    },0);
     console.log('2');
 }
//  printer();

function longTask(){
    console.log('Starting...');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let val = 55;
            resolve(val);
        },2000);
    });
}

// (async () =>{
//     let val = await longTask();
//     console.log(val);
// })();
longTask().then(d=>console.log(d))
console.log('End')