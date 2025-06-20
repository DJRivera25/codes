import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { Button } from "react-bootstrap";
import EditProfileModal from "./EditProfileModal";
import UserContext from "../context/UserContext";
import { Notyf } from "notyf";
import baseURL from "../api/baseURL"; // 👈 import baseURL

const EditProfile = ({ details, refresh }) => {
  const { user } = useContext(UserContext);
  console.log(`details`, details);
  console.log(`user Id from edit profile`, user.id);
  const notyf = new Notyf();
  const [userDetails, setUserDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setUserDetails(details);
  }, [details]);

  function editProfile(userId) {
    setEditForm({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobileNo: userDetails.mobileNo,
    });
    setShowModal(true);
  }

  function handleChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }

  async function submitEdit(e) {
    e.preventDefault();
    const isValidMobile = /^[0-9]{11}$/.test(editForm.mobileNo);
    if (!isValidMobile) {
      setErrorMessage("Mobile number must be exactly 11 digits.");
      return;
    }
    const res = await axios.patch(
      `${baseURL}/users/profile`, // 👈 use baseURL here
      {
        firstName: editForm.firstName,
        lastName: editForm.lastName,
        mobileNo: editForm.mobileNo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setShowModal(false);
    refresh();
    notyf.success(res.data.message);
  }

  return (
    <>
      {/* ✅ Reusable Modal Component */}
      <EditProfileModal
        show={showModal}
        onHide={() => setShowModal(false)}
        formData={editForm}
        handleChange={handleChange}
        handleSubmit={submitEdit}
        errorMessage={errorMessage}
      />

      <Button variant="light" size="sm" onClick={() => editProfile(user.id)}>
        <FaEdit /> Edit
      </Button>
    </>
  );
};

export default EditProfile;
