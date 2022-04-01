import React from "react";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import Searchbar from "../components/Searchbar";
import "../style/style.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Result />
    </div>
  );
};

export default Home;
