//import "../css/main.css";
console.log("TypeScript-ээс мэндчилье! 🚀 ");

//Callback Function
function funcA(){
    setTimeout(() => {
        console.log('A');
    }, 1000);       
}

function funcB(){
    setTimeout(() => {
        console.log('B');
    }, 1000);       
}

function funcC(){
    setTimeout(() => {
        console.log('C');
    }, 3000);       
}


//callback control functions
type SimpleCallback = () => void;
// Step 1: Simulates mixing batter (takes 1.5seconds)
function makeBatter (callback: SimpleCallback){
    console.log("1.Mixing the batter")
    setTimeout(()=> {
        console.log(".   -> Batter is ready");
        callback(); /// run the next step
    }, 1500);
}

// Step2 : Simulates cooking the pancake (takes 2 seconds)
function cookPancake (callback: SimpleCallback){
    console.log("2. Pouring batter on the griddle...");
    setTimeout(()=>{
        console.log(".    -> Pancake is cooked!");
        callback();
    }, 2000);
}

// Step3 : Simulates adding syrup (taked 0.5 seconds)
function addSyrup (callback:SimpleCallback){
    console.log("3. Adding maple syrup...");
    setTimeout(() =>{
        console.log("    -> Pancake is ready to eat");
        callback();
    }, 500);
}


function main() {
  //funcA();
  //funcB();
  //funcC();

  /// make pancake
  console.log("Let's make pancakes!");
  // Start step 1
  makeBatter(()=>{
    //Step 2
    cookPancake(()=>{
        //Step3
        addSyrup(()=>{
            console.log("\n All done. Enjoy your breakfast!")
        });  // End of add Syrup
    }) // End of cookpancake
  }) // End of makeBatter
  // PROMISE
  console.log(myPromise);
  myPromise
   .then(()=>{
     console.log('Next');
   })
   .catch(()=>{
     console.log('Failed Promise');
   })
}

// Promise
let myPromise = new Promise<void>((resolve, reject)=>{
    const isApproved = true;
    if (isApproved){
        console.log("OK");
        resolve();
    } else {
        console.log("Fail");
        reject();
    }
})
console.log(myPromise);
myPromise
   .then(()=>{
    console.log('Next');
   })
   .catch(()=>{
    console.log('Failed Promise');
   })








document.addEventListener('DOMContentLoaded', main);