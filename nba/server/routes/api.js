const express = require("express");
const router = express.Router();
const urllib = require("urllib");

let allTeams;
let allPlayers;
let dreamTeam;
//all teams data
urllib.request("http://data.nba.net/10s/prod/v1/2018/teams.json", function (
  err,
  response
) {
  const nbaTeamsData = JSON.parse(response.toString());
  const nbaTeams = nbaTeamsData.league.standard;
  const nbaTeamsIdMap = nbaTeams.map((n) => ({
    teamID: n.teamId,
    name: n.teamShortName,
    nickName: n.nickname,
  }));
  allTeams = nbaTeamsIdMap;
});
// all players data
urllib.request("http://data.nba.net/10s/prod/v1/2018/players.json", function (
  err,
  response
) {
  const nbaPlayersData = JSON.parse(response.toString());
  const nbaPlayers = nbaPlayersData.league.standard;
  const nbaPlayersInfo = nbaPlayers.map((n) => ({
    personalId: n.personId,
    firstName: n.firstName,
    lastName: n.lastName,
    teamId: n.teamId,
    pos: n.pos,
    jersey: n.jersey,
    isActive: n.isActive,
    dreamTeam: false,
  }));
  allPlayers = nbaPlayersInfo;
});
// match team , find players and send
router.get("/teams/:teamName", function (req, res) {
  const name = req.params.teamName;

  const index = allTeams.findIndex(
    (n) => n.name === name || n.nickName === name
  );
  const id = allTeams[index].teamID;
  const activePlayesr = allPlayers.filter((n) => n.isActive === true);
  const filterPlayers = activePlayesr.filter((a) => a.teamId === id);
  res.send(filterPlayers);
});

// insert players to dream team
router.post("/dreamTeam", function (req, res) {
  const playerId = req.body;
  const onePlayer = allPlayers.filter((n) => n.personalId === playerId.id);

  if (!dreamTeam.some((d) => d.personalId == onePlayer[0].personalId)) {
    if (dreamTeam.length < 5) {
      onePlayer[0].dreamTeam = true;
      dreamTeam.push(onePlayer[0]);
      res.send(`You have ${5-dreamTeam.length} more choices left,Max 5 players `)
    }else res.send(`You can remove players from dream team`)
  }

  
});
//remove player
router.post("/removePlayers",function(req,res){
const playerId=req.body
const playerIndex = dreamTeam.findIndex(d=>d.personalId==playerId.id)
const onePlayer = allPlayers.filter((n) => n.personalId === playerId.id);
onePlayer[0].dreamTeam = false;
dreamTeam.splice(playerIndex,1);
res.end()
})
// sending dream team arry
router.get("/dreamTeam", function (req, res) {
  res.send(dreamTeam);
});

router.post("/refreshDreamTeam", function (req, res) {
  dreamTeam = [];
  res.end();
});

module.exports = router;
