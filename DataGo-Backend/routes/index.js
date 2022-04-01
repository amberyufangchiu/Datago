var express = require("express");
var router = express.Router();
var conn = require("../mysql");

/* GET home page. */
router.post("/", function (req, res, next) {
  res.send("welcome");
});

// ================for chart=============
router.get("/getTeamChart", function (req, res) {
  conn.query(
    "select team_name, COUNT(*) nums from players GROUP by team_name having nums<=15;",
    [],
    function (err, row) {
      // console.log(row);
      res.send(JSON.stringify(row));
    }
  );
});

// ================for sorting===========

// -------Points-------
router.post(`/players`, function (req, res) {
  // console.log(req.body);
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;

  if (
    req.body.Search.teamValue === "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by points_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by points_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue === " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? order by points_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      `select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players order by points_per_game DESC limit ${limit}`,
      [],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});

// -------Games-------
router.post(`/playersGame`, function (req, res) {
  // console.log(req.body);
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;

  if (
    req.body.Search.teamValue === "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by games_played DESC " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by games_played DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue === " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? order by games_played DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      `select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players order by games_played DESC limit ${limit}`,
      [],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});

// -------Rebounds-------
router.post(`/playersRebounds`, function (req, res) {
  // console.log(req.body);
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;

  if (
    req.body.Search.teamValue === "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by rebounds_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by rebounds_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue === " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? order by rebounds_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      `select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players order by rebounds_per_game DESC limit ${limit}`,
      [],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});

// -------Assists-------
router.post(`/playersAssists`, function (req, res) {
  // console.log(req.body);
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;

  if (
    req.body.Search.teamValue === "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id,team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by assists_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id,team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by assists_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue === " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? order by assists_per_game  DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      `select id,team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players order by assists_per_game DESC limit ${limit}`,
      [],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});

// -------Steals-------
router.post(`/playersSteals`, function (req, res) {
  // console.log(req.body);
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;

  if (
    req.body.Search.teamValue === "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by steals_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by steals_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue === " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? order by steals_per_game  DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      `select id,team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players order by steals_per_game DESC limit ${limit}`,
      [],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});

// -------Blocks-------
router.post(`/playersBlocks`, function (req, res) {
  // console.log(req.body);
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;

  if (
    req.body.Search.teamValue === "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id,team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by blocks_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue != " "
  ) {
    conn.query(
      "select id,team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' order by blocks_per_game DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else if (
    req.body.Search.teamValue != "all" &&
    req.body.Search.keywordValue === " "
  ) {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? order by blocks_per_game  DESC " +
        `limit ${limit}`,
      [req.body.Search.teamValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      `select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players order by blocks_per_game DESC limit ${limit}`,
      [],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});

// ============for search=============
router.get("/AllTheTeam", function (req, res) {
  conn.query(
    `select DISTINCT team_name from players order by team_name asc`,
    [],
    function (err, row) {
      // console.log(row);
      res.send(JSON.stringify(row));
    }
  );
});

router.post("/getResult", function (req, res) {
  // console.log(req.body);
  var page = req.body.PageNum;
  var numPerPage = 15;
  var skip = (page - 1) * numPerPage;
  var limit = skip + "," + numPerPage;
  // console.log(limit);
  if (req.body.Search.teamValue === "all") {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where name LIKE '%" +
        req.body.Search.keywordValue +
        "%' " +
        `limit ${limit}`,
      [req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  } else {
    conn.query(
      "select id, team_name ,name, games_played ,points_per_game,rebounds_per_game ,assists_per_game, steals_per_game  ,blocks_per_game from players where team_name=? and name LIKE '%" +
        req.body.Search.keywordValue +
        "%' " +
        `limit ${limit}`,
      [req.body.Search.teamValue, req.body.Search.keywordValue],
      function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      }
    );
  }
});
// ============for pagination=========
router.post("/pagination", function (req, res) {
  // console.log(req.body.Search.teamValue);
  // console.log(req.body.Search.keywordValue);
  if (req.body.Search.teamValue === "all") {
    if (req.body.Search.keywordValue !== " ") {
      conn.query(
        "select count(*) nums from players where name LIKE '%" +
          req.body.Search.keywordValue +
          "%' ",
        [req.body.Search.keywordValue],
        function (err, row) {
          // console.log(row);
          res.send(JSON.stringify(row));
        }
      );
    } else if (req.body.Search.keywordValue === " ") {
      conn.query("select count(*) nums from players", [], function (err, row) {
        // console.log(row);
        res.send(JSON.stringify(row));
      });
    }
  } else if (req.body.Search.teamValue !== "all") {
    if (req.body.Search.keywordValue !== " ") {
      conn.query(
        "select count(*) nums from players where team_name=? and name LIKE '%" +
          req.body.Search.keywordValue +
          "%' ",
        [req.body.Search.teamValue, req.body.Search.keywordValue],
        function (err, row) {
          // console.log(row);
          res.send(JSON.stringify(row));
        }
      );
    } else if (req.body.Search.keywordValue === " ") {
      conn.query(
        "select count(*) nums from players where team_name=? ",
        [req.body.Search.teamValue],
        function (err, row) {
          // console.log(row);
          res.send(JSON.stringify(row));
        }
      );
    }
  }
});

// ============for detail=============
router.post("/getPlayerDetail", function (req, res) {
  // console.log(req.body.playerID);
  // console.log("ok");
  conn.query(
    "select * from players where id=?",
    [req.body.playerID],
    function (err, row) {
      // console.log(row);
      res.send(JSON.stringify(row));
    }
  );
});

module.exports = router;
