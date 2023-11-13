import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DisplayUser = () => {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div className="col">
          <h2 className="text-center text-white fw-bold mt-3 mb-4">
            User details
          </h2>
          <table className="table rounded-corners table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center ">
            <NavLink to={"/"} className={"btn btn-primary me-5 "}>
              Go back
            </NavLink>
            <NavLink to={"/deleteuser"} className={"btn btn-danger "}>
              Delete User
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
