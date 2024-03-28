function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const A = [];

for (let i = 1; i < 101; i++) {
  A.push(i);
}

console.log(A);

for (let i =1; i < 101; i++) {
  if (A[i] % 3 == 0) {
    A[i] = 'C';
  }
}



console.log(A);

for (let i =1; i < 101; i++) {
  if (A[i] % 7 == 0) {
    A[i] = 'B';
  }
}

console.log(A);

for (let i = 0; i < 100; i++) {
  if (typeof A[i] === 'number') {
    A[i] *= 5; // Multiply the number by 5 and store it back into the array
  }
}

console.log(A);


for (let i = 0; i < 100; i++) {
  if (typeof A[i] !== 'number') {
    A[i] = i;
  }
}

console.log(A);

for (let i =1; i < 101; i++) {
  if (A[i] % 3 == 0 && A[i] % 5 !== 0) {
    A[i] = 'X';
  }
}

console.log(A);


let sum = 0;

for (let i = 0; i < 100; i++) {
  if (typeof A[i] === 'number') {
    sum += A[i];
  }
}

console.log(sum);