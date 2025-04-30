const mongoose = require("mongoose");

exports.Database = function Database() {
  mongoose.set('strictQuery', false);
  
  mongoose
    .connect("mongodb+srv://jobBoard:ankeshkumar@cluster0.9aasq0e.mongodb.net/jobportal?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("DB Connection Successful");
    })
    .catch((err) => {
      console.log("Database connection error:", err.message);
    });
};
