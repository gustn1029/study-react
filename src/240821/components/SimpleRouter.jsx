import React, { useState } from "react";
import Loading from "./Loading";
import Admin from "./Admin";
import User from "./User";
import Guest from "./Guest";

const SimpleRouter = ({ authority }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1000);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {authority === "admin" && <Admin />}
      {authority === "user" && <User />}
      {authority === "guest" && <Guest />}
    </>
  );
};

export default SimpleRouter;
