const xyz = require("./data.js");
const fs = require("fs");

// Read data file stored in JSON format
// const tR = JSON.parse(fs.readFileSync("priceData.txt"));

// Parse data file and store as an object
/* const tRObject = tR.map((data) => {
  data = {
    price: data[0],
    date: data[1],
  };
  return data;
}); */
// Put data into database (Only run once.  Otherwise, errors will be thrown)
// xyz.storePrice(tRObject);
console.log(
  xyz.getPrice({
    date: { $gte: new Date(1990, 0, 0), $lt: new Date(1990, 0, 1) },
  })
);
