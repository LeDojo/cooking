import { Schema, model } from "mongoose";

const subscriberSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true, lowercase: true },
    zipCode: {
      type: Number,
      min: [10000, "Code Postal est trop court"],
      max: 99999,
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
const Subscriber = model("Subscriber", subscriberSchema);
export default Subscriber;
