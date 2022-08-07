import init, { hello } from '../pkg/hello_wasm.js';

init().then(() => {
    hello('Rust + WebAssembly');
});
