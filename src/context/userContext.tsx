import axios from "axios";
import { createContext, useState } from "react";
interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  fetchQuestions: (
    level: string,
    category: string,
    type: string
  ) => Promise<void>;
}
interface IProps {
  children: React.ReactNode;
}
export const UserContext = createContext({} as Props);
const UserProvider = ({ children }: IProps) => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const fetchQuestions = async (
    level: string,
    category: string,
    type: string
  ) => {
    console.log(level, category, type);
    //const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=${type}`;
    const url =
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=boolean";
    const res = await axios.get(url);
    console.log(res.data);
  };
  return (
    <UserContext.Provider value={{ name, setName, score, fetchQuestions }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
