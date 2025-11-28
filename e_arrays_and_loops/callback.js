//Using a Promise Object that takes in callback function to create a delay
/* const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
await sleep(2000);
console.log("its 2 secs", sleep); */

const sleep = async (delay) => new Promise((resolve) => setTimeout(() => {
    console.log("Im asleep 2 sec");
    return resolve();
}, delay));

await sleep(2000);


//When using setTimeout, we are essentially applying a callback function as well
//After two second, setTimeout should run the callback function with console.log(...)
setTimeout(() => {
    console.log("I've been waiting for 2 seconds");
}, 2000);