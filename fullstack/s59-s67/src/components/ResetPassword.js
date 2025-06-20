import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ResetPasswordModal from "./ResetPasswordModal";
import { Notyf } from "notyf";
import baseURL from "../api/baseURL"; // 👈 import baseURL

const ResetPassword = ({ refresh }) => {
  const notyf = new Notyf();
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editForm, setEditForm] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  function editPassword() {
    setShowModal(true);
    setErrorMessage(""); // clear any existing error
  }

  function handleChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }

  async function submitEdit(e) {
    e.preventDefault();

    try {
      const res = await axios.patch(
        `${baseURL}/users/profile/reset-password`, // 👈 use baseURL here
        {
          password: editForm.password,
          newPassword: editForm.newPassword,
          confirmPassword: editForm.confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.message === "Old Password does not match") {
        setErrorMessage(res.data.message);
      } else if (res.data.message === "Password does not match") {
        setErrorMessage(res.data.message);
      } else {
        // Success: reset form, hide modal
        setShowModal(false);
        setEditForm({
          password: "",
          newPassword: "",
          confirmPassword: "",
        });
        notyf.success(res.data.message);
        setErrorMessage("");
        refresh(); // optional callback
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage("Something went wrong. Please try again");
    }
  }

  return (
    <>
      <ResetPasswordModal
        show={showModal}
        onHide={() => setShowModal(false)}
        handleChange={handleChange}
        handleSubmit={submitEdit}
        errorMessage={errorMessage}
        formData={editForm}
      />

      <div className="text-center py-4 px-4">
        <Button variant="outline-primary" size="lg" className="w-100 fw-semibold" onClick={editPassword}>
          Change Password
        </Button>
      </div>
    </>
  );
};

export default ResetPassword;
