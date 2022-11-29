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
  data: any[];
  setData: React.Dispatch<any>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}
interface IProps {
  children: React.ReactNode;
}
export const UserContext = createContext({} as Props);
const UserProvider = ({ children }: IProps) => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [data, setData] = useState<any>([]);

  const fetchQuestions = async (
    level: string,
    category: string,
    type: string
  ) => {
    console.log(level, category, type);
    //const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=${type}`;
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=${type}`;
    const res = await axios.get(url);
    setData(res?.data?.results);
  };
  return (
    <UserContext.Provider
      value={{ name, setName, score, setScore, fetchQuestions, data, setData }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
