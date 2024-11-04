
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className=" p-1">
      <div className=" mt-48 overflow-visible relative">
        <footer className="w-9/12 mx-auto footer bg-base-200 absolute -top-32 left-[175px] bg-[url('src/assets/bg-shadow.png')] rounded-xl text-base-content p-10 flex justify-center items-center text-center flex-col">
          <div className="">
            <h2 className="font-bold text-2xl">Subscribe to our Newsletter</h2>
            <p className="font-medium text-[#131313B3]">
              Get the latest updates and news right in your inbox!
            </p>
            <form>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your mail.."
                    className="input input-bordered join-item"
                  />
                  <button className="btn bg-[#e1df4d] join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
         
        </footer>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
