// Энгийн функц - type annotation-тай*
    function greet(name: string): void {
        console.log("Сайн байна уу, " + name + "!");
    }
// Callback функц хүлээн авдаг функц*
    function processUser(name: string, callbackFunc: (name: string) => void): void {
        console.log("Баяртай, " + name);
// Callback функцыг ажиллуулах*
            callbackFunc(name);
    }
// Ашиглалт*
    processUser("Бат", greet);