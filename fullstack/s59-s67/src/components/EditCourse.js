import { Modal, Form, Button } from "react-bootstrap";

export default function EditCourseModal({ show, onHide, formData, handleChange, handleSubmit }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="md" className="rounded-4">
      <Modal.Header closeButton className="bg-primary text-white rounded-top-4 px-4 py-3">
        <Modal.Title className="fw-bold">Edit Course Details</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body className="px-4 pt-4">
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Course Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter course name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Brief course description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="shadow-sm"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Price (PHP)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="e.g. 499.00"
              value={formData.price}
              onChange={handleChange}
              className="shadow-sm"
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="px-4 pb-4">
          <Button variant="outline-secondary" onClick={onHide} className="rounded-pill px-4">
            Cancel
          </Button>
          <Button type="submit" variant="success" className="rounded-pill px-4 shadow-sm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
