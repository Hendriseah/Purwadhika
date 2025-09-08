// Write a code to check whether the number is odd or even
let num1 = 25
let num2 = 2

if (num1 % 2 == 0) {
    console.log(num1 + " is a even number");
} else {
    console.log(num1 + " is a odd number");
}

if (num2 % 2 == 0) {
    console.log(num2 + " is a even number");
} else {
    console.log(num2 + " is a odd number");
}

// Write a code to check whether the number is prime number or not
let num3 = 7;
if (num3 > 1) {
    let prima = true;
    for (let i = 2; i < num3; i++) {
        if (num3 % i == 0) {
            prima = false;
        }
    }
    if (prima) {
        console.log(num3 + " is a prime number");
    } else {
        console.log(num3 + " is not a prime number");
    }
}

// Write a code to find the sum of the numbers 1 to N
let sum = 0
for (let n = 1; n <= 10; n++) {
    sum += n;
    console.log(sum);
}

// Write a code to find factorial of a number
let num5 = 5;
let j = 1;
let f = 1;
do {
    f *= j;
    console.log(f);
    j++;
} while (j <= num5);


// Write a code to print the first N fibonacci numbers
let fibon = 15;
let a = 0;
let b = 1;
let c;
if (fibon >= 1) {
    console.log(a);
    for (let d = 1 ; d <= fibon; d++) {
        console.log(b);
        c = a + b;
        a = b;
        b = c;
    }
}