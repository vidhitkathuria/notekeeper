import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center home">
      <div className="card w-50 mx-auto  p-4">
        <h1 className="text-center text-dark">Welcome to TO-Do-List</h1>
        <p className="text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis
          impedit sequi ex nihil non, eaque, qui commodi at incidunt accusamus.
          Optio placeat fuga amet, eius autem eum suscipit tempora. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorem rerum vero culpa
          sequi laborum. Quos tenetur, accusamus odio dolore sapiente inventore,
          itaque id blanditiis fuga soluta veniam sunt, quasi perferendis?
        </p>
        <div className="d-flex justify-content-around ">
          <button onClick={()=>navigate("/login")} className="btn btn-primary">
            Login
          </button>
          <button className="btn btn-primary">Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
