const failed = false;

const myPromise = new Promise((resolve, reject) => {
  
    // if failed (true). return a reject
if(failed)
    reject("failed promise");
    else 
        resolve("resolved!");

});

function success(result){
    console.log(result);
}

function onFailed(error){
    console.log(error);
}

myPromise
.then((result) =>{
    // print the resolve statement
    success(result);
})

.catch((error) => {
    // print the error (reject)
    onFailed(error);
});