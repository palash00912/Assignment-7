import PropTypes from 'prop-types'

const Player = ({ player, handleSelectedPlayer }) => {
  const {
    id,
    name,
    team,
    role,
    battingStyle,
    bowlingStyle,
    img,
    priceInAuction,
  } = player;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10 object-center w-96 h-80">
          <img src={img} alt="Shoes" className="rounded-xl h-full w-full" />
        </figure>
        <div className="card-body ">
          <div className="flex gap-2">
            <img className="h-8 w-7 content-center " src="https://i.ibb.co.com/0ZT9GTn/profile.png" alt="" />
          <h2 className="card-title">{name}</h2>
          </div>
          <div className=" border-b-2">
            <div className="flex justify-between mb-3">
              <div className="flex gap-2">
                <img className="h-5 w-5 content-center " src="https://i.ibb.co.com/BN0Vx5X/report.png" alt="" />
                <p> {team}</p>
              </div>
              <button className=" btn  border rounded-xl">{role}</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Rating</h4>
            <div className="flex justify-between">
              <p className="font-semibold">{battingStyle}</p>
              <p className="text-[#131313B3]">{bowlingStyle}</p>
            </div>
            <div className="flex justify-between pt-2">
              <p>Price:${priceInAuction}</p>
              <button onClick={()=>handleSelectedPlayer(player)} className="btn border rounded-xl">
                Choose Player
              </button>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes={
  player:PropTypes.object.isRequired,
  handleSelectPlayer:PropTypes.func.isRequired 
}

export default Player;
