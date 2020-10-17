// Run this once to create a data file stored in JSON format

const moment = require("moment");
const fs = require("fs");

// Create an array with dummy data
let day = new Date(1990, 0, 1);
let priceArray = [];
let price = 100;
let vol = 20;
let daily = 0.2 / Math.sqrt(252);
priceArray.push([
  parseFloat(price.toFixed(2)),
  moment(day).format("YYYY-MM-DD"),
]);
for (let i = 0; i < 99; i++) {
  if (Math.floor(Math.random() * 2)) {
    price = price - daily;
  } else {
    price = price + daily;
  }
  day = moment(day).add(1, "days").format("YYYY-MM-DD");
  priceArray.push([parseFloat(price.toFixed(2)), day]);
}

// Write array to text file in JSON format
fs.writeFileSync("priceData.txt", JSON.stringify(priceArray));
