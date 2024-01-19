import mongoose from "mongoose";
import "dotenv/config";
import Subscriber from "../src/models/subscriberModel.js";
import Course from "../src/models/courseModel.js";


async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database");
    await Promise.all([Subscriber.deleteMany(), Course.deleteMany()]);

    const testSubscriber = await Subscriber.create({
      name: "John",
      email: "john@example.com",
      zipCode: "12345",
    });
    const testCourse = await Course.create({
      title: "Tomato Land",
      description: "Dans une ferme pleine de tomates",
    });
    testSubscriber.courses.push(testCourse);
    await testSubscriber.save();

    const populateSubscriber = await Subscriber.populate(
      testSubscriber,
      "courses"
    );
    console.log(populateSubscriber);
    const subscriberWithTestCourse = await Subscriber.find({
      courses: mongoose.Types.ObjectId(testCourse._id),
    });
    console.log(subscriberWithTestCourse);
  } catch (error) {
    console.error("Erreur de seed dans la Db:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Deconnexion de la DB");
  }
}

seedDatabase();
