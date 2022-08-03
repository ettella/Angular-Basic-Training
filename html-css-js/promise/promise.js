
let a = 5;
let b = 10;


function asyncLogger() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b > a){resolve('Nagyobb a B');}
            else{reject('Nem nagyobb');}
                
        }, 3000)
    })
}

// asyncLogger()
//     .then((str) => console.log(str))  //sikeres
//     .catch((err) => console.log(err)) //sikertelen
//     .finally(() => {}) //lefutott

async function handleAsyncCall(){
    
try {
    console.log('promise előtt');
    const message = await asyncLogger();
    console.log(message);
    console.log('promise után');
}
catch(err){
    console.log(err);
}
    
}

handleAsyncCall()