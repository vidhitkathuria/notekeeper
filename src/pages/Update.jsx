import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const _id = location.search.split("=")[1];

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "https://todolist-aviral.herokuapp.com/getTask?id=" + _id
      );
      setTitle(resp.data.title);
      setContent(resp.data.content);
    };
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.patch(
      "https://todolist-aviral.herokuapp.com/updateTask?id=" + _id,
      {
        title:title,
        content: content,
      }
    );
    navigate("/");
  };
  return (
    <div className="main">
      <h1 className="text-center m-5">Update Task</h1>
      <form className="m-5 p-3 border w-75 mx-auto">
        <div className="form-group mb-3">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Content</label>
          <textarea
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-4" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
