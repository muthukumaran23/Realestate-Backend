const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const DbConnection = require("./Connection/db.js");
const propertyRoute = require("./routes/propertyRoute.js");
const userRoute = require("./routes/userRoute.js");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5500;

DbConnection();

app.use("/property", propertyRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Please welcome ");
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
