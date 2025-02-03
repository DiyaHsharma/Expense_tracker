const express = require("express");
const connectDB = require("./Models/db");

const app = express();
connectDB(); // Call the function here

app.listen(8080, () => console.log("🚀 Server is running on 8080"));
