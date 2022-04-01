import React, { useEffect, useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import context from "../context";
import { GoSearch } from "react-icons/go";
import { TiArrowUnsorted } from "react-icons/ti";

const Result = () => {
  const [Res, setRes] = useState([]);
  const [mySwitch, setMyswitch] = useState(1);
  const [pageNum, setPageNum] = useState([]);
  const { SearchRes } = useContext(context);
  const { setSearchRes } = useContext(context);
  const { PageNum } = useContext(context);
  const { Search } = useContext(context);
  const { setSearch } = useContext(context);
  const { Pagination } = useContext(context);
  const history = useHistory();

  // console.log(Pagination);
  const pageBtn = [];

  for (let i = 1; i < Pagination + 1; i++) {
    pageBtn.push(
      <button data-categroy={i} onClick={(e) => getPage(e)} data-page={i}>
        {i}
      </button>
    );
  }

  async function getPlayers() {
    await axios
      .post("http://localhost:9999/players", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getPlayersGame() {
    await axios
      .post("http://localhost:9999/playersGame", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getplayersRebounds() {
    await axios
      .post("http://localhost:9999/playersRebounds", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getplayersAssists() {
    await axios
      .post("http://localhost:9999/playersAssists", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getplayersSteals() {
    await axios
      .post("http://localhost:9999/playersSteals", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getplayersBlocks() {
    await axios
      .post("http://localhost:9999/playersBlocks", {
        PageNum: PageNum.current,
        Search: Search,
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getPage = (e) => {
    let clicktarget = e.target.dataset.categroy;
    history.push("/" + clicktarget);
    const getPageNum = e.target.dataset.page;
    PageNum.current = parseInt(getPageNum);
    switch (mySwitch) {
      case 0:
        getPlayersGame();
        console.log("0000");
        break;
      case 1:
        getPlayers();
        break;
      case 2:
        getplayersRebounds();
        break;
      case 3:
        getplayersAssists();
        break;
      case 4:
        getplayersSteals();
        break;
      case 5:
        getplayersBlocks();
        break;

      default:
        console.log("default");
        getPlayers();
    }
  };

  const getDetail = (e) => {
    const player_id = e.target.dataset.id;
    if (player_id !== undefined) {
      window.location = "/PlayerDetail/" + player_id;
      // console.log(e.target.dataset);
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (SearchRes.length === 0) {
      getPlayers();
    } else {
      setRes(SearchRes);
    }
  }, [SearchRes]);

  return (
    <div id="result-table">
      <table>
        <tbody>
          <tr>
            <th>Team</th>
            <th>Name</th>

            <th
              onClick={(e) => {
                getPlayersGame();
                setMyswitch(0);
              }}
            >
              Games
              <TiArrowUnsorted />
            </th>

            <th
              onClick={(e) => {
                getPlayers();
                setMyswitch(1);
              }}
            >
              Points
              <TiArrowUnsorted />
            </th>

            <th
              onClick={(e) => {
                getplayersRebounds();
                setMyswitch(2);
              }}
            >
              Rebounds
              <TiArrowUnsorted />
            </th>

            <th
              onClick={(e) => {
                getplayersAssists(e);
                setMyswitch(3);
              }}
            >
              Assists
              <TiArrowUnsorted />
            </th>
            <th
              onClick={(e) => {
                getplayersSteals(e);
                setMyswitch(4);
              }}
            >
              Steals
              <TiArrowUnsorted />
            </th>
            <th
              onClick={(e) => {
                getplayersBlocks(e);
                setMyswitch(5);
              }}
            >
              Blocks
              <TiArrowUnsorted />
            </th>

            <th>Detail</th>
          </tr>
          {Array.isArray(Res) &&
            Res.map((elm, idx) => (
              <tr key={idx}>
                <td>{elm.team_name}</td>
                <td>{elm.name}</td>
                <td>{elm.games_played}</td>
                <td>{elm.points_per_game}</td>
                <td>{elm.rebounds_per_game}</td>
                <td>{elm.assists_per_game}</td>
                <td>{elm.steals_per_game}</td>
                <td>{elm.blocks_per_game}</td>
                <td>
                  <GoSearch onClick={getDetail} data-id={elm.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="btn-group">{pageBtn}</div>
    </div>
  );
};

export default Result;
