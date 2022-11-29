import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

interface Props {
  allAnswers: string[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}
const Quiz = ({ allAnswers, currentQuestion, setCurrentQuestion }: Props) => {
  const [selected, setSelected] = useState<string>("");
  const { data } = useContext(UserContext);
  console.log(data, "data");
  const handleAnswer = () => {};
  const handleNext = () => {
    setCurrentQuestion((curr) => curr + 1);
  };
  const handlePrev = () => {
    setCurrentQuestion((curr) => curr - 1);
  };
  return (
    <div>
      <div>
        <h2 className="text-center">{`Question ${currentQuestion + 1}`}</h2>
        <div className="shadow rounded-lg px-4 py-2 my-9">
          <p className="text-lg font-semibold text-start">
            {data[currentQuestion]?.question}
          </p>
          <div>
            {allAnswers?.map((item) => (
              <div key={item}>
                <button
                  onClick={handleAnswer}
                  className="rounded px-4 py-3 text-lg font-medium w-full text-start bg-white my-4"
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="bg-rose-500 px-10 py-2 bg-red rounded outline-none uppercase  text-center text-base text-white"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-rose-500 px-10 py-2 bg-red rounded outline-none uppercase  text-center text-base text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
