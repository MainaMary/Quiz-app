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
  loading: boolean;
  error: string;
}
interface IProps {
  children: React.ReactNode;
}
export const UserContext = createContext({} as Props);
const UserProvider = ({ children }: IProps) => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchQuestions = async (
    level: string,
    category: string,
    type: string
  ) => {
    console.log(level, category, type);
    //const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=${type}`;
    setLoading(true);
    try {
      const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=${type}`;
      const res = await axios.get(url);
      setData(res?.data?.results);
      setLoading(false);

      setError("");
    } catch (error) {
      console.log(error, "error");
      setError("An error occurred");
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        score,
        setScore,
        fetchQuestions,
        data,
        setData,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
