import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      maxLength: 50,
    },
    imgPath: {
      type: String,
      required: [true, "Please provide an image source"],
    },
    includeInGallery: {
      type: Boolean,
      default: false,
    },
    eagerToLoad: {
      type: Boolean,
      default: false,
    },
    includeInCarousel: {
      type: Boolean,
      default: false,
    },
    eventId: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Photo || mongoose.model("Photo", photoSchema);
