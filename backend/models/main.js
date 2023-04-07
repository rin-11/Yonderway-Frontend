const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;

// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

// Connection Events
mongoose.connection
  .on("open", () => console.log("connected to the DB"))
  .on("close", () => console.log("disconnected from the DB"))
  .on("error", (error) => console.log(error));
