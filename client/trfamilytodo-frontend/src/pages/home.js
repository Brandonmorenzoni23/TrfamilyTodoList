import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../hooks/useGetUserID";
import ListOfTodos from "../components/listOfTodos";


const Home = () => {

  const userID = useGetUserID();
  const navigate = useNavigate();

  const [handleTodo, setHandleTodo] = useState("");

  const writeTodo = {
    todo: handleTodo,
    user: userID,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await axios.post("http://localhost:3001/home/addTodo", {
        writeTodo,
      });
      navigate("/home");
    } catch (error) {
      console.error(error);
    }

  }

  return (
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h2>Write Your Todo List!!!</h2>
          <div className="form-group">
            <input
              type="text"
              id="writeTodos"
              value={handleTodo}
              onChange={(event) => setHandleTodo(event.target.value)}
            />
          </div>
          <button type="submit">Add Todo</button>
        </form>
        <ListOfTodos/>
      </div>
    );
}

export default Home