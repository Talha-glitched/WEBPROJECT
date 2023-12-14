import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String,  },
  contact: { type: String,  },
  email: { type: String,  },
  requirement: { type: String,  },
});

const Review = mongoose.model("Quote", reviewSchema);

export default Review;
