import { fib } from "./build/out.js";

for (let i = 0; i < 10; i++) {
    document.body.innerText += `fib(${i}) = ${fib(i)}\n`;
}
