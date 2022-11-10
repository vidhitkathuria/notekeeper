import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("https://todolist-aviral.herokuapp.com/addTask", {
      title: title,
      content: content,
    });
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="main">
      <h1 className="text-center m-5">Add Task</h1>
      <form
        className={`m-5 p-3 border w-75 mx-auto ${loading ? "disable" : ""}`}
      >
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
        <button className="btn btn-primary mt-4" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {loading && <Spin className="loader" />}
    </div>
  );
};

export default Create;
