import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";

const ListOfTodos = () => {

    const userID = useGetUserID();
    const [listTodos, setListTodos] = useState([]);

    useEffect(() => {
        const Todos = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/home/listOfTodos/${userID}`);
            setListTodos(response.data);
          } catch (err) {
            console.log(err);
          }
        };
        Todos();
    },[])

  return (
    <div>
        <ul>
        {listTodos.map((listTodos) => (
            <li>{listTodos.comment}</li>
    ))}
        </ul>
    </div>
  )
}

export default ListOfTodos