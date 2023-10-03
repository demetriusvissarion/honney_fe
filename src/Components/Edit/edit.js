import React from "react";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

export const Edit = ({ id }) => {
  const history = useNavigate();

  const editTodo = () => {
    fetch(`/api/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history("/");
      });
  };

  return (
    <>
      <button onClick={editTodo}>EDIT</button>
    </>
  );
};
