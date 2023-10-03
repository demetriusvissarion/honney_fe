import React from "react";
import { Link } from "react-router-dom";
// import { useTransition, animated } from "@react-spring/web";

export const Card = ({ listOfTodos }) => {
  // console.log(
  //   `This is the listOfTodos prop imported in card.js: ${listOfTodos}`
  // );

  // const transitions = useTransition(
  //   listOfTodos,
  //   (listOfTodos) => listOfTodos.id,
  //   {
  //     from: {
  //       opacity: 1,
  //       width: "4%",
  //       marginLeft: -100,
  //       marginRight: 100,
  //     },
  //     enter: {
  //       opacity: 0,
  //       width: "100%",
  //       padding: "5px 0",
  //       marginLeft: 0,
  //       marginRight: 0,
  //     },
  //   }
  // );

  // console.log(`This is the listOfTodos: ${transition}`);

  // return transitions.map(({ item, key, props }) => {
  //   return (
  //     <animated.ul key={item.id} style={props}>
  //       <li>
  //         <Link to={`${item.id}`}>{item.content}</Link>
  //       </li>
  //     </animated.ul>
  //   );
  // });

  return (
    <>
      {listOfTodos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <Link to={`${todo.id}`}>{todo.content}</Link>
            </li>
          </ul>
        );
      })}
    </>
  );
};
