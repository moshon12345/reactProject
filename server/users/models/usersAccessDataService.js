const DB = process.env.DB || "MONGODB";
const User = require("./mongodb/User");
const lodash = require("lodash");
const { comparePassword } = require("../helpers/bcrypt");
const { generateAuthToken } = require("../../auth/Providers/jwt");
const { handleBadRequest } = require("../../utils/handleErrors");
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1/business_card_app";
const mongoose = require("mongoose");
const { number } = require("joi");

const registerUser = async (normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      const { email } = normalizedUser;
      let user = await User.findOne({ email });
      if (user) throw new Error("User already registered");

      user = new User(normalizedUser);
      user = await user.save();

      user = lodash.pick(user, ["name", "email", "_id"]);
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const deleteBadLoginStatus = async (userId) => {
  let userTfHoursStatus = await TestModel.findOne({ userId });

  let userToDelete = await TestModel.findByIdAndDelete(userTfHoursStatus._id);

  return Promise.resolve(userTfHoursStatus);
}

const schema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
 email: {
  type: String,
  unique: true,
  lowercase: true,
  trim: true,
 },
 TFHoursInNumber: {
  type: String,
 },
 firstBadLogIn: {
  type: String,
 },
 secondBadLogin: {
  type: String,
 },
 thirdBadLogin: {
  type: String,
 },
 calculate: {
  type: String,
 }
});
const TestModel = mongoose.model('Test', schema);

const loginUser = async ({ email, password }) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findOne({ email });
      let userTfHoursStatus = await TestModel.findOne({ email });
      let currentTime = new Date();
      currentTime = currentTime.getTime();

      if (userTfHoursStatus && userTfHoursStatus.thirdBadLogin !== "waitingForData") {

       let userTfHoursStatus = await TestModel.findOne({ email });
          let tfH = {
            "userId": user._id,
            "lastBadLogIn": userTfHoursStatus.thirdBadLogin,
            "status": "24 hours block",
          }
          return Promise.resolve(tfH);
    }
      
      
      if (!user)
        throw new Error("Authentication Error: Invalid email or password");

      const validPassword = comparePassword(password, user.password);
      if (!validPassword) {
        badLogin(email, password, user)
        return Promise.resolve("wrongpassword");
        // throw new Error("Authentication Error: Invalid email or password");
      }
      const token = generateAuthToken(user);
      return Promise.resolve(token);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("loginUser user not in mongodb");
};

const badLogin = async (email, password, user) => {
  if (DB === "MONGODB") {
    try {
      let userTfHoursStatus = await TestModel.findOne({ email });

      if (!userTfHoursStatus){
          let currentTime = new Date();
          currentTime = currentTime.getTime();
          await mongoose.connect('mongodb://127.0.0.1/business_card_app');
          await TestModel.collection.insertOne({ 
            userId: user._id,
            email: user.email,
            TFHoursInNumber : 86400000,
            firstBadLogIn: currentTime,
            secondBadLogin: "waitingForData",
            thirdBadLogin: "waitingForData",
            // calculate: "waitingForDataToCalculate"
          });
        }

        if (userTfHoursStatus.secondBadLogin == "waitingForData") {
          let currentTime = new Date();
          currentTime = currentTime.getTime();
          let userToChange = await TestModel.findByIdAndUpdate(userTfHoursStatus._id, {
              userId: user._id,
              email: user.email,
              firstBadLogIn: userTfHoursStatus.firstBadLogIn,
              secondBadLogin: currentTime,
              thirdBadLogin: "waitingForData",
              // calculate: "waitingForDataToCalculate"
            }, 
            {
            new: true,
        });
      }

      if (userTfHoursStatus.thirdBadLogin == "waitingForData" && userTfHoursStatus.secondBadLogin !== "waitingForData") {
          let currentTime = new Date();
          currentTime = currentTime.getTime();
          let userToChange = await TestModel.findByIdAndUpdate(userTfHoursStatus._id, {
              userId: user._id,
              email: user.email,
              firstBadLogIn: userTfHoursStatus.firstBadLogIn,
              secondBadLogin: userTfHoursStatus.secondBadLogin,
              thirdBadLogin: currentTime,
              // calculate: "waitingForDataToCalculate"
            }, 
            {
            new: true,
        });
      }
    } catch (error) {
      throw new Error("Error");
    }
  }
}

const TfHoursCheck = async (email, password) => {
  if (DB === "MONGODB") {
try {
     const user = await User.findOne({ email });
     let userTfHoursStatus = await TestModel.findOne({ email });

      if (userTfHoursStatus) {
        console.log(userTfHoursStatus)
      }
      if (userTfHoursStatus) {
        if (+userTfHoursStatus["calculate"] > 1 && +userTfHoursStatus["calculate"] < 86400000) {
          return Promise.resolve(userTfHoursStatus.calculate);
        }
      }

      let userToChange = await TestModel.findByIdAndUpdate(user._id, {
        userId: user._id,
        email: user.email,
        firstBadLogIn: user.firstBadLogIn,
        secondBadLogin: user.secondBadLogin,
        thirdBadLogin: user.thirdBadLogin,
        calculate: currentTime-user.firstBadLogIn
      })


} catch (error) {
  throw new Error("Error");
}
}
}


const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      const users = await User.find({}, { password: 0, __v: 0 });
      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get users not in mongodb");
};

const getUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId, {
        password: 0,
        __v: 0,
      });
      if (!user) throw new Error("Could not find this user in the database");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("Mongoose", error);
    }
  }
  return Promise.resolve("get user not in mongodb");
};

const updateUser = async (userId, normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      let userToChange = await User.findByIdAndUpdate(userId, normalizedUser, {
        new: true,
      });

      if (!userToChange)
        throw new Error("A user with this ID cannot be found in the database");

      return Promise.resolve(userToChange);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose", error);
    }
  }
  return Promise.resolve("user updateUser not in mongodb");
};

const changeUserBusinessStatus = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId)
      if (user.isBusiness == false) {
        user.isBusiness = true
        // console.log(false)

        let userToChange = await User.findByIdAndUpdate(userId, user, {
          new: true,
        });

      } else {
        user.isBusiness = false
        // console.log(true)

        let userToChange = await User.findByIdAndUpdate(userId, user, {
          new: true,
        });

      }
      //  user.isBusiness = false
      // return Promise.resolve(`user no. ${userId} change his business status!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const deleteUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId);

      if (!user)
        throw new Error("A user with this ID cannot be found in the database");

      user = await User.findByIdAndDelete(userId);

      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose", error);
    }
  }
  return Promise.resolve("user deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
exports.deleteBadLoginStatus = deleteBadLoginStatus
