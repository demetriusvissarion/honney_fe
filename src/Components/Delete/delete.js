import React from "react";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

export const Delete = ({ id }) => {
  const history = useNavigate();

  const deleteTodo = () => {
    fetch(`/api/${id}`, {
      method: "POST",
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
      <button>Delete</button>
    </>
  );
};
