import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios.get(
        "https://todolist-aviral.herokuapp.com/getTasks"
      );
      setLoading(false);
      console.log(resp);
      setTasks(resp.data);
    };
    fetchData();
  }, [toggle]);

  const handleDelete = async (id) => {
    setLoading(true);
    await axios.delete(
      "https://todolist-aviral.herokuapp.com/deleteTask?id=" + id
    );
    setLoading(false);
    setToggle(!toggle);
  };

  return (
    <div className="">
      <h1 className="text-center m-5">To Do List</h1>
      <div className="list-body mx-auto w-75 ">
        <table className={`table table-bordered ${loading ? "disable" : ""}`}>
          <thead>
            <tr>
              <th>Tasks</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>
                  <div>
                    <p>{task.title}</p>
                    <small>{task.content}</small>
                  </div>
                </td>
                <td className="text-center">
                  <img
                    src="../media/editing.png"
                    alt="edit"
                    className="icon"
                    onClick={() => navigate("/update?id=" + task._id)}
                  />
                </td>
                <td className="text-center">
                  <img
                    src="../media/bin.png"
                    alt="delete"
                    onClick={() => handleDelete(task._id)}
                    className="icon"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td className="text-center">
                <img
                  src="../media/add.png"
                  alt="add"
                  className="icon"
                  onClick={() => navigate("/create")}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {loading && <Spin className="loader" />}
    </div>
  );
};

export default List;
