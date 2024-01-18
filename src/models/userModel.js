import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        trim: true,
      },
      last: {
        type: String,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    zipcode: {
      type: Number,
      min: [1000, "Code Postal est trop court"],
      max: 99999,
    },
    password: {
      type: String,
      required: true,
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("fullname").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

const User = model("User", userSchema);
export default User;
