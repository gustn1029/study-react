import Quiz1 from "./quiz1";
import Feeling from "./Feeling";
import Resume from "./Resume";
import Login from "./components/Login";
import { useState } from "react";
import Homepage from "./components/Homepage";

const user = {
  idUser: "jaehyun@weniv.com",
  pwUser: 1234,
};

const Study = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <h1>240819 강의</h1>
      <Resume />
      <Quiz1 />
      <Feeling />
      {isLogin ? <Homepage setIsLogin={setIsLogin} /> : <Login user={user} setIsLogin={setIsLogin} />}
    </div>
  );
};

export default Study;
