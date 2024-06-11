import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const View = () => {
  const location = useLocation();
  let data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const [record, setRecord] = useState(data);
  const [mdelete, setMdelete] = useState([]);

  // del single user
  const DeleteUser = (id) => {
    let del = record.filter((val) => val.id != id);
    alert("Record deleted successfully....");
    setRecord(del);
    localStorage.setItem("users", JSON.stringify(del));
  };

  //del multiple user
  const muldelhandleChecked = (id, checked) => {
    let all = [...mdelete];
    if (checked) {
      all.push(id);
    } else {
      all = all.filter((val) => val.id != id);
    }
    setMdelete(all);
  };

  const MULDEL = () => {
    if (mdelete.length >= 0) {
      let delid = record.filter((val) => !mdelete.includes(val.id));
      alert("Records deleted Successfully....");
      localStorage.setItem("users", JSON.stringify(delid));
      setRecord(delid);
    } else {
      alert("Please select atleast one record to delete...");
    }
  };

  //single status
  const StatusUpdate = (id, status) => {
    if (status === "Ongoing") {
      let up = record.map((val) => {
        if (val.id == id) {
          val.status = "Completed";
        }
        return val;
      });
      localStorage.setItem("users", JSON.stringify(up));
      setRecord(up);
      alert("Status changed successfully...");
    } else {
      let up = record.map((val) => {
        if (val.id == id) {
          val.status = "Ongoing";
        }
        return val;
      });
      localStorage.setItem("users", JSON.stringify(up));
      setRecord(up);
      alert("Status changed successfully...");
    }
  };

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
              <th scope="col">
                <FaBook />
              </th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
              <th scope="col">
                <button onClick={() => MULDEL()} className="border-0 ">
                  MULDEL
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {record.map((r) => {
              return (
                <tr>
                  <td>
                    <FaBook />
                  </td>
                  <td>{r.title}</td>
                  <td>{r.description}</td>
                  <td>
                    {r.status === "Ongoing" ? (
                      <button
                        className="bg-danger border-0 btn btn-sm text-white"
                        onClick={() => StatusUpdate(r.id, r.status)}
                      >
                        {r.status}
                      </button>
                    ) : (
                      <button
                        className="bg-success border-0 btn btn-sm text-white"
                        onClick={() => StatusUpdate(r.id, r.status)}
                      >
                        {r.status}
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="px-1 border-0 bg-transparent"
                      onClick={() => EditUser(r.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="px-1 border-0 bg-transparent"
                      onClick={() => DeleteUser(r.id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={mdelete.includes(r.id)}
                      onChange={(e) =>
                        muldelhandleChecked(r.id, e.target.checked)
                      }
                    />
                  </td>
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
