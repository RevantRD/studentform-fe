import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const DeleteUser = () => {
  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const resp = await fetch("http://localhost:5000/get");
      const data = await resp.json();
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    swal("Success", "User deleted successfully", "success");
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div className="col col-sm-12">
          <h2 className="text-center text-white fw-bold mt-3 mb-4">
            User details
          </h2>
          <table className="rounded-corners table  table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Location</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                  <td>
                    <span
                      className=" btn btn-sm btn-danger"
                      onClick={(e) => {
                        deleteUser(item.id);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <NavLink to={"/userdata"} className={"btn btn-primary "}>
              Go back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
