import { Modal, Button, Form } from "react-bootstrap";

export default function EditProfileModal({ show, onHide, formData, handleChange, handleSubmit, errorMessage }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Edit Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="px-3">
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">First Name</Form.Label>
            <Form.Control
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Last Name</Form.Label>
            <Form.Control
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="fw-semibold">Mobile Number</Form.Label>
            <Form.Control
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter 11-digit mobile number"
              size="lg"
            />
          </Form.Group>

          {errorMessage && <div className="text-danger mt-2 mb-3 fs-6">{errorMessage}</div>}
        </Form>
      </Modal.Body>

      <Modal.Footer className="px-4">
        <Button variant="secondary" size="lg" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" size="lg" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
