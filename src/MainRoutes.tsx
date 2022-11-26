import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Form from "./pages/Form";

const MainRoutes = () => {
  const ListRoutes = [
    { component: <HomePage />, path: "/" },
    {
      component: <Quiz />,
      path: "/quiz",
    },
    {
      component: <QuizResults />,
      path: "/quizResults",
    },
    {
      component: <Form />,
      path: "/form",
    },
  ];
  return (
    <Routes>
      {ListRoutes.map(({ component, path }, index: number) => (
        <Route key={index} element={component} path={path} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
