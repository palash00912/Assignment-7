import Banner from "./Banner";

const Header = ({coin,fistTimeSetMoney}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="https://i.ibb.co.com/f8C4k0v/Logo.png" alt="" />
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 space-x-4 text-center ">
            <li>
              {" "}
              <a href="">Home</a>
            </li>
            <li>
              {" "}
              <a href="">Fixture</a>
            </li>
            <li>
              {" "}
              <a href="">Teams</a>
            </li>
            <li>
              {" "}
              <a href="">Schedules</a>
            </li>
          </ul>
          <div>
            <div  className="dropdown dropdown-end md:ml-20">
              <div className="md:text-xl text-lg  font-semibold text-[#131313] border p-2 rounded-xl flex  items-center">
                <p>{coin}</p>
                <p className="ml-1 mr-2">Coin</p>
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=OFHwDWASQWmX&format=png&color=000000"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner fistTimeSetMoney={fistTimeSetMoney}></Banner>
    </div>
  );
};



export default Header;
