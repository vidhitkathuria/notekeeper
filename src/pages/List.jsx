import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./List.css";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "https://todolist-aviral.herokuapp.com/getTasks"
      );
      console.log(resp);
      setTasks(resp.data);
    };
    fetchData();
  }, [tasks]);

  const handleDelete = async (id) => {
    await axios.delete(
      "https://todolist-aviral.herokuapp.com/deleteTask?id=" + id
    );
  };

  return (
    <div className="">
      <h1 className="text-center m-5">To Do List</h1>
      <div className="list-body mx-auto w-75 ">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Tasks</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr>
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
    </div>
  );
};

export default List;
