import SelectedPlayer from "./SelectedPlayer";


const SelectedPlayers = ({selectedPlayer,handleDelete,handleIsActiveState}) => {
    return (
        <div>
            {
                selectedPlayer.map((p,idx) =>(
                    <SelectedPlayer key={idx} handleDelete={handleDelete} player={p}></SelectedPlayer>
                ))
            }
            <div>
            <button onClick={()=>handleIsActiveState('available')} className="btn btn-warning mt-5">Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;