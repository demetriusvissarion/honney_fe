import React, { useState, useEffect } from "react";
import { Delete } from "../Components/Delete/delete";
import { useParams, Link } from "react-router-dom";

export const Show = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <div>
      {todo.length > 0 && todo.map((data) => <div>{data.content}</div>)}
      <Delete id={id} />
      <hr></hr>
      <Link to="/">Go Back</Link>
    </div>
  );
};
