const { default: mongoose } = require("mongoose");

let connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://ayansaha558_db_user:cohort12345@cohort-cluster.wckgso6.mongodb.net/",
  );
  console.log("mongodb connected");
};

module.exports = connectDb;
