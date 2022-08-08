export function fib(n: i32): i32 {
    if (n <= 0) return 0;

    let a = 0;
    let b = 1;

    while (--n) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}
