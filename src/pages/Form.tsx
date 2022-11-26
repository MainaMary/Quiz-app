import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Categories from "../data/Categories";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
const Form = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const { setName, name, fetchQuestions } = useContext(UserContext);
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };
  const handleLevel = (e: any) => {
    setLevel(e.target.value);
  };
  const handleType = (e: any) => {
    setType(e.target.value);
  };
  const levelArr = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "difficult", name: "Difficult" },
  ];
  const typeArr = [
    {
      id: "multiple",
      title: "Multi choice",
    },
    {
      id: "boolean",
      title: "True/False",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!level || !category || !name || !type) {
      setError(true);
    } else {
      setError(false);
      e.target.reset();

      fetchQuestions(level, category, type);
      navigate("/quizResults");
    }
  };
  return (
    <div className="flex justify-center mt-8">
      <form className="shadow rounded w-1/2 px-4 py-3" onSubmit={handleSubmit}>
        {error ? (
          <p className="text-red-700">Please fill all the fields</p>
        ) : null}
        <div className="my-5">
          <label className="block">Name</label>
          <input
            type="text"
            className="w-full"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <Label>Category</Label>
          <select className="w-full" onChange={handleCategory}>
            <option>Select Category..</option>
            {Categories.map((item) => (
              <option key={item.value} value={item.value}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <Label>Level </Label>
          <select
            className="w-full"
            onChange={handleLevel}
            value={level}
            name="level"
          >
            <option>Select level..</option>
            {levelArr.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <Label> Type </Label>
          <select
            className="w-full"
            onChange={handleType}
            value={type}
            name="level"
          >
            <option>Select type..</option>
            {typeArr.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <button className="w-full">Start quiz</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
