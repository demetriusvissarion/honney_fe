import React, { useState, useEffect } from "react";
import { Card } from "../Components/Card/card";

export const TodoPage = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {});

  return (
    <>
      <Card />
    </>
  );
};
