import Players from "./Players";
import "./Container.css";
import { useEffect, useState } from "react";
import SelectedPlayers from "./SelectedPlayers";

const Container = ({
  handleIsActiveState,
  isActive,
  handleSelectedPlayer,
  selectedPlayer,handleDelete
}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  

  return (
    <div className="mt-5  w-11/12 mx-auto ">
      <div className="flex justify-between p-3">
      <h1 className={`font-extrabold -top-64 ${isActive.available ? "hidden" : ""}`}>Selected Player({selectedPlayer.length}/6)</h1>
      <h3 className={`font-extrabold -top-64 ${isActive.available ? "" : "hidden"}`}>Available Players</h3>
        <div className="join">
          <button
            onClick={() => handleIsActiveState("available")}
            className={`${isActive.available ? "btn active" : "btn"}`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("Selected")}
            className={`${isActive.available ? "btn" : "active btn"}`}
          >
            Selected
          </button>
        </div>
      </div>
      {isActive.available ? (
        <Players
          handleSelectedPlayer={handleSelectedPlayer}
          players={players}
          
        ></Players>
      ) : (
        <SelectedPlayers selectedPlayer={selectedPlayer} handleDelete={handleDelete} handleIsActiveState={handleIsActiveState} ></SelectedPlayers>
      )}
    </div>
  );
};

export default Container;
