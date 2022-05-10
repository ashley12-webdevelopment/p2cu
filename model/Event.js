import mongoose from "mongoose";
import validator from "validator";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      maxlength: 50,
      default: "[Public Site submitted event]",
    },
    eventDate: {
      type: Date,
      required: [true, "Please provide event date"],
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "on-hold", "complete", "rejected"],
      default: "pending",
    },
    contactPerson: {
      type: String,
      required: [true, "Please provide contact person"],
    },
    contactNumber: {
      type: String,
      required: [true, "Please provide contact number"],
    },
    contactEmail: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
    },
    eventDescription: {
      type: String,
      maxLength: 250,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Event || mongoose.model("Event", eventSchema);
