"use strict";
function greet(greeting) {
    console.log("".concat(greeting.message, ", ").concat(greeting.name, "!"));
}
var myGreeting = {
    message: "Сайн байна уу",
    name: "TypeScript"
};
greet(myGreeting);
