const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost/P20", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected"));

const priceSchema = new Schema({
  price: { type: Number },
  date: { type: Date, unique: true },
});

const Price = mongoose.model("Price", priceSchema);

module.exports = {
  storePrice: function (p) {
    Price.create(p)
      .then(() => console.log("data Stored"))
      .catch((err) => console.error(err));
  },
  getPrice: function (date) {
    Price.find(date)
      .then((dbmod) => console.log(dbmod))
      .catch((err) => console.error(err));
  },
};
