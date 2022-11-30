import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizResults from "./pages/QuizResults";
import Form from "./pages/Form";
import FinalResults from "./pages/FinalResults";

const MainRoutes = () => {
  const ListRoutes = [
    { component: <HomePage />, path: "/" },

    {
      component: <QuizResults />,
      path: "/quizResults",
    },
    {
      component: <Form />,
      path: "/form",
    },
    {
      component: <FinalResults />,
      path: "/finalResults",
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
