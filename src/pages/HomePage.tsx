import React from "react";
import Image from "../assets/quizImg.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-auto px-16">
      <div className="flex justify-between gap-6 mt-24">
        <div className="w-1/2 flex h-32 items-center">
          <div>
            <h1>
              Welcome to the Brain teaser app.Become smarter by solving
              challenges
            </h1>
            <h2>Select your preferred category and start the quiz</h2>
            <button onClick={() => navigate("/form")}>Sign in</button>
          </div>
        </div>
        <div className="w-1/2 h-32">
          <img src={Image} alt="dice" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
