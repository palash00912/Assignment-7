import { useEffect, useState } from "react";
import Player from "./Player";
import "./Players.css";

const Players = ({ players,handleSelectedPlayer }) => {
  return (
    <div>
     
      <div className="grid grid-cols-3 gap-4 ">
        {players.map((player) => (
          <Player key={player.id} handleSelectedPlayer={handleSelectedPlayer} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
