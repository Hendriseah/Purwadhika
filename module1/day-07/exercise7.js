//EXERCISE 1
function mergeStudents(arr1, arr2) {
  const merged = [...arr1, ...arr2];

  const unique = new Map();
  for (let student of merged) {
    unique.set(student.email, student); 
  }

  return Array.from(unique.values());
}

const array1 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 2', email: 'student2@mail.com' }
];

const array2 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 3', email: 'student3@mail.com' }
];

const arrayResult = mergeStudents(array1, array2);
console.log(arrayResult);

//EXERCISE 2
function switchKeysAndValues(arr) {
  return arr.map(obj => {
    let swapped = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        swapped[obj[key]] = key;
      }
    }
    return swapped;
  });
}

const input = [{ name: 'David', age: 20 }];
const output = switchKeysAndValues(input);
console.log(output);