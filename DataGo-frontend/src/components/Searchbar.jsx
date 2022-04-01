import React, { useState, useEffect, useContext } from "react";
import Chart from "./Chart";
import context from "../context";
import axios from "axios";

const Searchbar = () => {
  const [Res, setRes] = useState([]);
  // const [Pagination, setPagination] = useState([]);
  const { SearchRes } = useContext(context);
  const { setSearchRes } = useContext(context);
  const { PageNum } = useContext(context);
  const { Search } = useContext(context);
  const { setSearch } = useContext(context);
  const { setPagination } = useContext(context);

  async function getAllTheTeam() {
    await axios
      .get("http://localhost:9999/AllTheTeam")
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const teamValue = (e) => {
    setSearch({ ...Search, ["teamValue"]: e.target.value });
  };

  const keywordValue = (e) => {
    setSearch({ ...Search, ["keywordValue"]: e.target.value });
  };

  async function getResultValue() {
    await axios
      .post("http://localhost:9999/getResult", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setSearchRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .post("http://localhost:9999/pagination", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        // console.log(res.data[0].nums / 15);
        setPagination(res.data[0].nums / 15);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getResult = (e) => {
    getResultValue();
  };

  useEffect(() => {
    getAllTheTeam();
  }, []);

  return (
    <div id="search-bar">
      <div className="team-select">
        <p>Team:</p>
        <select name="" id="" onChange={teamValue}>
          <option value="all">All</option>
          {Array.isArray(Res) &&
            Res.map((elm, idx) => (
              <option key={idx} value={elm.team_name}>
                {elm.team_name}
              </option>
            ))}
        </select>
      </div>
      <div className="keyword-input">
        <p>Keywords:</p>
        <input type="text" onChange={keywordValue} />
      </div>
      <button className="search-btn" onClick={getResult}>
        Search
      </button>
      <Chart />
    </div>
  );
};

export default Searchbar;
