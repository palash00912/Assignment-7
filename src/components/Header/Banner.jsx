

const Banner = ({fistTimeSetMoney}) => {
  return (
    <div className=" flex items-center justify-center text-center bg-[url('https://i.ibb.co.com/5WZP7bs/bg-shadow.png')] bg-black p-14 flex-col space-y-4 rounded-xl">
      <img src="https://i.ibb.co.com/2kRhq1k/banner-main.png" alt="" />
      <h2 className="text-3xl font-bold text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
      <div onClick={()=>fistTimeSetMoney(100000000)} className="border rounded-xl p-2 bg-gray-700">
        <button className="btn btn font-bold text-[#131313] bg-[#E7FE29]">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;