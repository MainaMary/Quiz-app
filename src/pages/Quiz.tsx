import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Quiz = () => {
  const { data } = useContext(UserContext);
  console.log(data);
  return <div>Quiz</div>;
};

export default Quiz;
