import React, { useState } from "react";
// import React from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Add = () => {
  let location = useLocation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const [record, setRecord] = useState(data);
  const [edit, setEdit] = useState("");
  const [single, setSingle] = useState("");

  const handleSubmit = (h) => {
    h.preventDefault();
    // console.log(title);
    let obj = {
      id: Date.now(),
      title,
      description,
      status: "Ongoing",
    };
    if (edit) {
      let newrec = [...record];
      let editrec = newrec.map((val) => {
        if (val.id === edit) {
          return {
            ...val,
            title,
            description,
          };
        }
        return val;
      });
      localStorage.setItem("users", JSON.stringify(editrec));
      setRecord(editrec);
      setEdit(" ");
      setSingle(" ");
      alert("Record Updated");
    } else {
      let newobj = [...record, obj];
      localStorage.setItem("users", JSON.stringify(newobj));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="">
      <div className="container py-5">
        <button className="btn btn-primary">
          <Link to={"/View"} className="text-white text-decoration-none">
            View
          </Link>
        </button>
        <form
          onSubmit={handleSubmit}
          className="col-7 mx-auto bg-info p-3 rounded-4 border border-dark border-2 shadow-xl"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputtitle1" className="form-label">
              Tilte
            </label>
            <input
              type="text"
              className="form-control"
              id="exampletitle"
              aria-describedby="titleHelp"
              onChange={(t) => setTitle(t.target.value)}
              value={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription1" className="form-label">
              Description
            </label>
            <input
              type="Description"
              className="form-control"
              id="exampleInputDescription1"
              onChange={(d) => setDescription(d.target.value)}
              value={description}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-light border border-2 border-dark"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
