const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const path = require("path");
//const config = require("./config");
//const Rental = require("./models/rental");
const FakeDb = require("./fake-db");
const rentalRoutes = require("./routes/rentals");
const userRoutes = require("./routes/users");
const bookingRoutes = require("./routes/bookings");
const app = express();
const connectDB = require("./config/connectDB");
const adminRoutes=require("./routes/admin")

mongoose.set("useCreateIndex", true); //prevent warning

// connect DB
connectDB();


// middleware 
app.use(bodyParser.json());

// rouuuuuutes
app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/bookings", bookingRoutes);
app.use("/admin",adminRoutes)



// run server
const port = process.env.PORT|| 5000
app.listen(port, err => 
    err? console.log("error"):console.log(`Server is running on port ${port}`)
    )