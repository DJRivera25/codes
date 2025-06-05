import { Modal, Button, Form } from "react-bootstrap";

export default function ResetPasswordModal({ show, onHide, formData, handleChange, handleSubmit, errorMessage }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Change Password</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="px-3">
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Old Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter old password"
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">New Password</Form.Label>
            <Form.Control
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="fw-semibold">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              size="lg"
            />
          </Form.Group>

          {errorMessage && <div className="text-danger text-center mt-2 mb-3 fs-6">{errorMessage}</div>}
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
