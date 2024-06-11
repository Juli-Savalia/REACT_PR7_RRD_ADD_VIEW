import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const View = () => {
  const location = useLocation();
  let data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const [record, setRecord] = useState(data);
  return (
    <div className="container py-5">
      <button className="btn btn-primary my-4">
        <Link to={"/"} className="text-white text-decoration-none">
          Add
        </Link>
      </button>
      <div className="bg-info p-5">
        <table className="table col-7 rounded-4 text-center">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((r) => {
              return (
                <tr>
                  <td>{r.title}</td>
                  <td>{r.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
