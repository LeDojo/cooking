import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import Course from "./models/courseModel";
import "dotenv/config";
mongoose.connect(process.env.MONGODB_URI);

export const seedCourses = async () => {
  try {
    const filePath = path.resolve(__dirname, "courses.json");
    const coursesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await Course.deleteMany({});
    await Course.create(coursesData);
    console.log("Courses successfully seeded!");
  } catch (error) {
    console.error("Error seeding courses:", error);
  } finally {
    mongoose.disconnect();
  }
};


