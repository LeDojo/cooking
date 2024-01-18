import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    maxStudents: {
      type: Number,
      default: 0,
      min: [0, "Le cours ne peut avoir un nombre négatif d'élèves"],
    },
    cost: {
      type: Number,
      default: 0,
      min: [0, "Le prix ne peut être negatif"],
    },
  },
  { timestamps: true }
);
const Course = model("Course", courseSchema);
export default Course;
