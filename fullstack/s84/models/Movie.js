const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    director: {
      type: String,
      required: [true, "director is required"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "year is required"],
      min: 0,
    },
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, "genre is required"],
      trim: true,
    },
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        comment: {
          type: String,
          trim: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
