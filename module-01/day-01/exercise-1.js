// Write a code to find area of rectangle
 let length1;
 let width1;

 length1 = 5
 width1 = 3

const areaofrectangle = length1 * width1;
console.log(areaofrectangle);

// Write a code to find perimeter of rectangle
 let length2;
 let width2;

 length2 = 5
 width2 = 3

const perimeterofrectangle = 2*(length2 + width2);
console.log(perimeterofrectangle);


// Write a code to find diameter, circumference and area of a circle
 let radius;
 radius = 5
 pi = 3.14159

const diameterofcircle = 2*radius;
console.log(diameterofcircle);

const circumferenceofcircle = 2*pi*radius;
console.log(circumferenceofcircle.toFixed(4));

const areaofcircle = pi*(radius*radius)
console.log(areaofcircle);

// Write a code to find angles of triangle if two angles are given
 let a;
 let b;

 a = 80
 b = 65

const angleofcircle = 180-(a+b);
console.log(angleofcircle);

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days)
let totaldays;
totaldays = 400
totaldays2 = 366

const years = totaldays / 365;
const years2 = totaldays2 / 365;
console.log(years.toFixed());
console.log(years2.toFixed());

const month = (totaldays % 365)/ 30;
const month2 = (totaldays2 % 365)/ 30;
console.log(month.toFixed());
console.log(month2.toFixed());

const days = (totaldays % 365)% 30;
const days2 = (totaldays2 % 365)% 30;
console.log(days.toFixed());
console.log(days2.toFixed());

// Write a code to get difference between dates in days
let date1 = new Date(2022-1-20);
let date2 = new Date(2022-1-22);
const differenceInTime = date1 - date2;
console.log(differenceInTime);