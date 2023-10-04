import React, { useState, useEffect } from "react";
import { Delete } from "../Components/Delete/delete";
import { Edit } from "../Components/Edit/edit";
import { useParams, Link } from "react-router-dom";

export const Show = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);

  const handleUpdate = (updatedTodo) => {
    // Update the todo in the state
    setTodo([updatedTodo]);
  };

  return (
    <div>
      {todo.length > 0 &&
        todo.map((data) => (
          <div key={data.id}>
            {data.content}
            <Edit
              id={data.id}
              initialContent={data.content}
              onUpdate={handleUpdate}
            />
            <Delete id={data.id} />
          </div>
        ))}
      <hr />
      <Link to="/">Go Back</Link>
    </div>
  );
};
