import React from "react";
import Navbar from "../components/Navbar";
import Homebar from "../components/Homebar";
import HomeMenu from "../components/HomeMenu";
import HomeMenuList from "../components/HomeMenuList";

function Home() {
  return (
    <>
      <Navbar />
      <Homebar />
      <HomeMenu/>
      <HomeMenuList/>
    </>
  );
}

export default Home;
