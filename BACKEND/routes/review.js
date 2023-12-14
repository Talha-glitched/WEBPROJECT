import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.post("/api/reviews", async (req, res) => {
  try {
    const { name, contact, email, opinion } = req.body;

    // Create a new review instance using your Review model
    const newReview = new Review({
      name,
      contact,
      email,
      opinion,
    });

    // Save the review to the database
    await newReview.save();

    // Respond with a success status
    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error submitting review", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/api/reviews/:reviewId", async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    // Find and delete the review by its ID
    const deletedReview = await Review.findOneAndDelete({ _id: reviewId });

    if (deletedReview) {
      res.status(200).send("Review deleted successfully");
    } else {
      res.status(404).send("Review not found");
    }
  } catch (error) {
    console.error("Error deleting review", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/api/reviews/:reviewId", async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    // Find and update the review by its ID
    const updatedReview = await Review.findOneAndUpdate(
      { _id: reviewId },
      { $set: req.body },
      { new: true } // Return the updated document
    );

    if (updatedReview) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).send("Review not found");
    }
  } catch (error) {
    console.error("Error updating review", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
