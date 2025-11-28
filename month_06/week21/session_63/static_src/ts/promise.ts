function makeBatter(): Promise<void> {
    console.log("1.Mixing the batter");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(".   => Batter is ready!");
            resolve(); //success  
        }, 1500);
    });
}

function cookPancakes(): Promise<void> {
    console.log("2.Pourin batter on thr griddle");

    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            const burned = Math.random() > 0.5;
            if (burned) {
                console.log('-> OH NO! You burned the pancake ')
            } else {
                console.log(".    -> Pancake is cooked");
                resolve(); // Success
            }
        }, 2000);
    });
}
function addSyrup(): Promise<void> {
    console.log("3.Adding mapple syrup...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(".  -> Pancake is ready to eat!");
            resolve();
        }, 500);
    })
}
console.log("Let's make a pancakes(with .catch");

makeBatter()
    .then(() => {
        //Batter is done, Now cook
        return cookPancakes();
    })
    .then(() => {
        //Pancake is done. Now add syrup
        return addSyrup();
    })
    .then(() => {
        console.log('\n All done. Enjoy your breakfast!');
    })
    .catch((error) => {
        console.log('n\ Breakfast failed');
        console.error(error)
    });

console.log("This message logs immediately.")

// async await

async function makeBreakfast(){
    try {
        console.log("Let's make a pancakes(with async/await)");
        //1. Wait for the batter  
         await makeBatter();
        
         //2. Wait for thr pancakes(with might fail)
         await cookPancakes();

         //3. Wait for the syrup(this won't run if cookPancakes fails)
         await addSyrup();
         console.log('\n All done. Enjoi your breakfast')
    } catch (error) {
        console.log("\n Breakfast failed");
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', makeBatter);
