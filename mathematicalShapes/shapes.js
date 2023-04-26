const side = 9;
diagonal = Math.sqrt(side**2 + side**2);
console.log(`The diagonal of the square is ${diagonal}`)

const side_1 = 5;
const side_2 = 6;
const side_3 = 7;
area = (1/4)*Math.sqrt(4*(side_2**2)*(side_3**2)-
(side_2**2+side_3**2-side_1**2)**2);
console.log(`The area of the triangle is ${area}`)

const radius = 4;
const pi = Math.PI;
circumference = 2*pi*radius;
surfaceArea = pi*radius**2;
console.log(`The circumference of the circle is ${circumference}`)
console.log(`The surface area of the circle is ${surfaceArea}`)

