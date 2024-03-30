
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





const newMD = [];

for (let i = 0; i < 4; i++) {
  const row = [];
for (let j = 0; j < 5; j++) {
  row.push(rand(10, 99));
}
newMD.push(row);
}

console.table(newMD);



let min = newMD[0][0]; // Initialize min with the first element of the first row

for (let i = 0; i < newMD.length; i++) {
    for (let j = 0; j < newMD[i].length; j++) {
        if (newMD[i][j] < min) {
            min = newMD[i][j];
        }
    }
}

console.log(min); // Output: minimum value in the newMD array

