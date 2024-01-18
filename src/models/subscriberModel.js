import { Schema, model } from "mongoose";

const subscriberSchema = new Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true },
  zipCode: {
    type: Number,
    min: [10000, "Code Postal est trop court"],
    max: 99999,
  },
});
const Subscriber = model("Subscriber", subscriberSchema);
export default Subscriber;
