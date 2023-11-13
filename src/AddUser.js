import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const AddUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    department: "",
    location: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("https://studentform-be.onrender.com/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      if (resp.status === 201) {
        swal("Success!", "User added successfully", "success");
      } else if (resp.status === 400) {
        swal("Error", "User already exists", "error");
      } else if (resp.status === 401) {
        swal("Incomplete", "All fields are mandatory", "warning");
      }
      setUser({
        id: "",
        name: "",
        department: "",
        location: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mt-5 mb-5 fw-bold text-white">
            STUDENT FORM
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-4 shadow"
              type="text"
              value={user.id}
              placeholder="Id"
              onChange={(e) => setUser({ ...user, id: e.target.value })}
            />
            <input
              className="form-control mb-4 shadow"
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              className="form-control mb-4 shadow"
              type="text"
              placeholder="Department"
              value={user.department}
              onChange={(e) => setUser({ ...user, department: e.target.value })}
            />
            <input
              className="form-control shadow "
              type="text"
              placeholder="Location"
              value={user.location}
              onChange={(e) => setUser({ ...user, location: e.target.value })}
            />
            <div className="row mt-5">
              <div className="col  d-flex justify-content-center">
                <button className="btn btn-primary me-5" type="submit">
                  Add data
                </button>
                <NavLink to="/userdata" className="btn btn-success">
                  View data
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
