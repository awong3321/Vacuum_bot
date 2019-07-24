const Vacuum = require('./vacuum');
const fs = require('fs');
const path = require('path');
/*
1) open file and append each row into arry
2) replace " " with "," in each row
3) initiate instance of vacuum
*/

// Import file data and insert all rows into arry
let data = fs.readFileSync('./input.txt','utf8');
let formattedData = (() => {
  let splitted = data.split("\n");
  let arr = [];
  for(i = 0; i < splitted.length; i++ ){
    arr.push(splitted[i].replace(" ", ","));
  }
  return arr
})();

//Create an instance of Vacuum
let width = parseInt(formattedData[0][0]);
let height = parseInt(formattedData[0][2]);
let start = [parseInt(formattedData[1][0]),parseInt(formattedData[1][2])];
let roomba = new Vacuum(height,width,start);
let cleanedCount = 0;

//Check if the there are any dirt by seeing if array is greater than 3
let arrDirt = (formattedData.length > 3) ? formattedData.slice(2,formattedData.length - 1) : [];

//Loop through cardinal directions and get the final position
for(i = 0; i < (formattedData[formattedData.length - 1].length); i++) {
  roomba.move(formattedData[formattedData.length - 1][i]);
  let positionString = `${roomba.currentPosition[0]},${roomba.currentPosition[1]}`;

  //checking to see if current position is the same as dirt. If yes, increment count and remove dirt
  if(arrDirt.includes(positionString)){
    cleanedCount ++;
    let valueIndex = arrDirt.indexOf(positionString);
    if(valueIndex > -1){
      arrDirt.splice(valueIndex, 1);
    };
  };
};

console.log(`${roomba.currentPosition[0]} ${roomba.currentPosition[1]}`);
console.log(cleanedCount);


