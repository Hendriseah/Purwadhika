// exercise 1

function printtriangle(height) {
    let counter = 1;

    for (let i = 1; i <= height; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            let num = counter < 10 ? "0" + counter : counter;
            row += num + " ";
            counter++;
        }

        console.log(row.trim());
    }
}
printtriangle(5);

// exercise 2
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(8);

// exercise 3
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

console.log(calculateBMI(45, 1.6)); 
console.log(calculateBMI(55, 1.65));
console.log(calculateBMI(75, 1.7));
console.log(calculateBMI(95, 1.75));
console.log(calculateBMI(130, 1.7));

// exercise 4
function removeOddNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(removeOddNumbers(numbers)); 

// exercise 5
function splitstr(str){
    return str.split(" ");
}
console.log (splitstr("Hello World"));
