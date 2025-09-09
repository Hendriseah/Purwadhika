// Write a code to display the multiplication table of a given integer.
let num1 = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${num1} x ${i}`);
}

// Write a code to check whether a string is a palindrome or not.
function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, "");
    let reversed = str.split("").reverse().join("");
    return str == reversed;
}
let word = "madam";
if (isPalindrome(word)) {
    console.log(`${word} → is a palindrome`);
} else {
    console.log(`${word} → not a palindrome`);
}

// Write a code to convert centimeter to kilometer.
function cmToKm(cm) {
    let km = cm / 100000;
    return km + " km";
}
let totalcm = 100000;
console.log(totalcm + " cm = " + cmToKm(totalcm));

// Write a code to format number as currency (IDR).
function formattoIDR(number) {
    return number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2
    });
}
let m = 1000;
console.log(formattoIDR(m));

// Write a code to remove the first occurrence of a given “search string” from a string.
function removeFirstOccurrence(str, search) {
    return str.replace(search, "");
}

let text = "Hello world";
let searchStr = "ell";

console.log(removeFirstOccurrence(text, searchStr));

// Write a code to capitalize the first letter of each word in a string.
function capthefirstletter (str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");                     
}

let text1 = "hello world"
console.log(capthefirstletter(text1));

// Write a code to swap the case of each character from string.
function swapcase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char == char.toUpperCase()) {
            result += char.toLowerCase(); // besar → kecil
        } else {
            result += char.toUpperCase(); // kecil → besar
        }
    }
    return result;
}

let text2 = "The QuiCk BrOwN Fox";
console.log(swapcase(text2));

// Write a code to find the largest of two given integers.
function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findLargest(42, 27));

// Write a conditional statement to sort three numbers.
function sort3number(a, b, c){
        if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

       if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }

    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    return [a, b, c];
}
console.log(sort3number(42, 27, 18));

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
function checkType(a) {
    if (typeof a === "string") {
        return 1; // if string
    } else if (typeof a === "number") {
        return 2; // if number
    } else {
        return 3; // for others
    }
}

console.log(checkType("hello"));
console.log(checkType(12));
console.log(checkType(true));

// Write a code to change every letter a into * from a string of input.
function repalcea(str) {
    return str.replace(/a/gi, "*");
}

let text3 = "An apple a day keeps the doctor away";
console.log(repalcea(text3));
