import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Navbar from "../components/Navbar";
import axios from "axios";

const PlayerDetail = (e) => {
  const [PlayerData, setPlayerData] = useState([]);
  const player_ID = e.match.params.id;

  async function getPlayeDetail() {
    await axios
      .post("http://localhost:9999/getPlayerDetail", { playerID: player_ID })
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getPlayeDetail();
  }, []);

  return (
    <div>
      <Navbar />
      {Array.isArray(PlayerData) &&
        PlayerData.map((elm, idx) => (
          <div id="player-detail" key={idx}>
            <div className="player-name">
              <BsPersonCircle />
              <h3>{elm.name}</h3>
            </div>
            <div className="player-box">
              <div className="player-box1">
                <p>PlayerID:{elm.id}</p>
                <p>Team:{elm.team_acronym}</p>
                <p>TeamName:{elm.team_name}</p>
              </div>
              <div className="player-box2">
                <p>Games:{elm.games_played}</p>
                <p>MPG:{elm.minutes_per_game}</p>
                <p>FGA:{elm.field_goals_attempted_per_game}</p>
                <p>FGM:{elm.field_goals_made_per_game}</p>
                <p>FG%:{elm.field_goal_percentage}</p>
                <p>FT%:{elm.free_throw_percentage}</p>
                <p>3PA:{elm.three_point_attempted_per_game}</p>
                <p>3PM:{elm.three_point_made_per_game}</p>
                <p>3PT%:{elm.three_point_percentage}</p>
              </div>
              <div className="player-box3">
                <p>Points:{elm.points_per_game}</p>
                <p>ORebounds:{elm.offensive_rebounds_per_game}</p>
                <p>DRebounds:{elm.defensive_rebounds_per_game}</p>
                <p>Rebounds:{elm.rebounds_per_game}</p>
                <p>Assists:{elm.assists_per_game}</p>
                <p>Steals:{elm.steals_per_game}</p>
                <p>Blocks:{elm.blocks_per_game}</p>
                <p>Turnovers:{elm.turnovers_per_game}</p>
                <p>Efficiency:{elm.player_efficiency_rating}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlayerDetail;
