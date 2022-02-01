// level {1}



async function GEt_daTA(){
    const r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//let the response be completed 
console.log(r);
}

async function GET_daTaJSON(){
    const r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const DATA = await r.json();
    return r;
}

GET_daTaJSON().then(r =>{
    r;
});

// async function GEt_daTA_ERROR(){
//     const r ] = await fetch('/')

// }