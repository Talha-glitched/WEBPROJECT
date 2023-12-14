import "./showReviews.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditReviewModal from "./EditReviewModal";


function ShowReviews() {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/api/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews", error.message, error.response);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (reviewId) => {
    try {
      // Make a DELETE request to the server to delete the review
      await axios.delete(`/api/reviews/${reviewId}`);

      // Update the state to reflect the deletion
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId)
      );

      console.log(`Review with ID ${reviewId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting review", error.message, error.response);
    }
  };

  const handleEdit = (reviewId) => {
    const reviewToEdit = reviews.find((review) => review._id === reviewId);
    setSelectedReview(reviewToEdit);
    setShowModal(true);
  };

  const handleEditSubmit = async (formData) => {
    try {
      const response = await axios.put(
        `/api/reviews/${selectedReview._id}`,
        formData
      );

      // Update the state to reflect the changes
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === selectedReview._id ? response.data : review
        )
      );

      console.log(`Review with ID ${selectedReview._id} edited successfully.`);
    } catch (error) {
      console.error("Error updating review", error.message, error.response);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReview({});
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row showReviews-row1">
          <h2>Reviews</h2>
          <table className="table text-center">
            <thead>
              <tr>
                <th className="align-middle">Name</th>
                <th className="align-middle">Contact</th>
                <th className="align-middle">Email</th>
                <th className="align-middle">Opinion</th>
                <th className="align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td className="align-middle">{review.name}</td>
                  <td className="align-middle">{review.contact}</td>
                  <td className="align-middle">{review.email}</td>
                  <td className="align-middle">{review.opinion}</td>
                  <td className="align-middle">
                    <button
                      className="btn btn-outline-danger me-1 mt-1"
                      onClick={() => handleDelete(review._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-outline-success ms-1 mt-1"
                      onClick={() => handleEdit(review._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row showReviews-row2">
        
        </div>
        <EditReviewModal
          show={showModal}
          handleClose={handleCloseModal}
          handleEditSubmit={handleEditSubmit}
          initialData={selectedReview}
        />
      </div>
    </>
  );
}

export default ShowReviews;
