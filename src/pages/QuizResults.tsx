import { string } from "joi";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";
import { UserContext } from "../context/userContext";
import Quiz from "./Quiz";

const QuizResults = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allAnswers, setAllAnswers] = useState<any>([]);

  const { data, name, score, loading } = useContext(UserContext);
  let combinedAnswers: any;
  if (data?.length) {
    combinedAnswers = [
      data[currentQuestion]?.correct_answer,
      ...data[currentQuestion]?.incorrect_answers,
    ];
  }
  const shuffleArray = (array: any) => {
    return array?.sort();
  };
  console.log(data);
  useEffect(() => {
    setAllAnswers(shuffleArray(combinedAnswers));
  }, [data, currentQuestion]);
  console.log(allAnswers, "allanswers");
  if (loading) return <CustomLoader />;
  return (
    <>
      <h2 className="text-center my-6">
        {`Welcome to the Brain Teaser app ${name}`}
      </h2>

      {data.length ? (
        <div className="flex justify-center w-1/2 bg-slate-500 m-auto p-8">
          <div className="w-full">
            <div className="flex justify-between">
              <p className="w-full">{`Category ${data[currentQuestion]?.category}`}</p>
              <p>{`Score ${score}`}</p>
            </div>
            <div>
              <div>
                <Quiz
                  allAnswers={allAnswers}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-1/3 align-center">
          <div>
            <p>No questions found. Please try again</p>
            <button onClick={() => navigate("/form")}>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizResults;
