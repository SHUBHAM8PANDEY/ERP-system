// controllers/createAdmin.js

const mongoose = require('mongoose');
const Admin = require('../models/Admin');  // ← one level up
const bcrypt = require('bcryptjs');

const MONGO_URI = "mongodb+srv://shubham:Shubham%40123@cluster0.ca2vpza.mongodb.net/ERP?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI)
  .then(async () => {
    const existingAdmin = await Admin.findOne({ email: "shubham@gmail.com" });
    console.log("dfdsfsd")
    if (existingAdmin) {
      console.log("Admin already exists!");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("123shubham", 10);

    const admin = await Admin.create({
      name: "Admin",
      email: "shubham@gmail.com",
      password: hashedPassword,
      isAdmin: true
    });

    console.log("Admin created successfully!");
    console.log("Email:", admin.email);
    console.log("Password: 123shubham");
    process.exit();
  })
  .catch(err => console.log("Error connecting to MongoDB:", err));