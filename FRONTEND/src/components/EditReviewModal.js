import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditReviewModal = ({
  show,
  handleClose,
  handleEditSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="number"
              value={formData.contact}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="opinion">
            <Form.Label>Your Opinion</Form.Label>
            <Form.Control
              type="text"
              value={formData.opinion}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="btn btn-dark" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditReviewModal;
