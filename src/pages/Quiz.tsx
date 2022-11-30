import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

interface Props {
  allAnswers?: string[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}
const Quiz = ({ allAnswers, currentQuestion, setCurrentQuestion }: Props) => {
  const [selected, setSelected] = useState<string>("");
  const [disableBtn, setDiableBtn] = useState<boolean>(false);
  const { data, setScore } = useContext(UserContext);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const handleAnswer = (item: string) => {
    setSelected(item);
  };

  const handleNext = () => {
    setCurrentQuestion((curr) => curr + 1);
    if (selected === data[currentQuestion].correct_answer) {
      setScore((score) => score + 1);
      console.log("true");
      setError("");
    } else if (selected) {
      setSelected("");
      setError("");
    } else {
      setError("Please select an answer");
    }
    if (currentQuestion === data.length - 1) {
      return navigate("/finalResults");
    }
  };
  const handleSelected = (item: string) => {
    console.log(item, "item", selected, "selected");
    if (item === data[currentQuestion].correct_answer) {
      return `bg-green-400`;
    } else if (item === data[currentQuestion].incorrect_answer) {
      return `bg-red-300`;
    }
  };
  const handlePrev = () => {
    setCurrentQuestion((curr) => curr - 1);
  };
  return (
    <div>
      <div>
        <h2 className="text-[red] text-center">{error}</h2>
        <h2 className="text-center">{`Question ${currentQuestion + 1}/${
          data?.length
        }`}</h2>
        <div className="shadow rounded-lg px-4 py-2 my-9">
          <p className="text-lg font-semibold text-start">
            {data[currentQuestion]?.question}
          </p>
          <div>
            {allAnswers?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(item)}
                className={
                  selected && allAnswers.indexOf(item) === index
                    ? `${handleSelected(
                        item
                      )} rounded px-4 py-3 text-lg font-medium w-full text-start my-4 }`
                    : `rounded px-4 py-3 text-lg font-medium w-full text-start bg-white my-4 }`
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          {currentQuestion === 0 ? (
            <button
              onClick={() => navigate("/form")}
              className="bg-rose-500 px-10 py-2 bg-red rounded outline-none uppercase  text-center text-base text-white"
            >
              Quit
            </button>
          ) : (
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="bg-rose-500 px-10 py-2 bg-red rounded outline-none uppercase  text-center text-base text-white"
            >
              Prev
            </button>
          )}

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
