import LogoutYoutube from "Common/Hooks/Youtube/LogoutYoutube";
import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";

const Home: FC = () => {
  const [localData, setLocalData] = useState(() => {
    const local = JSON.parse(localStorage.getItem("YoutubeLocal") || "{}");
    if (Object.keys(local).length === 0) {
      return false;
    }

    return local;
  });
  if (!localData) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <LogoutYoutube />
      <div className="">Home</div>
    </>
  );
};

export default Home;
