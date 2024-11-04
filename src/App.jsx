import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Players from "./components/Main/Players";
import Container from "./components/Main/Container";
import Player from "./components/Main/Player";
import SelectedPlayer from "./components/Main/SelectedPlayer";

function App() {
  const [coin, setCoin] = useState(0);
  const [checker, setChecker] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const [isActive, setIsActive] = useState({
    available: true,
    status: "active",
  });

  const handleSelectedPlayer = (player) => {
    const select = selectedPlayer.find((p) => p.id === player.id);

    if (coin <= 0) {
      toast.error("You do not have enough coin!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (selectedPlayer.length > 5) {
      toast.warn(`You dont have enough space for selection`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (select) {
      toast.error(`Player(${player.id}): ${player.name} is already selected`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setSelectedPlayer([...selectedPlayer, player]);
      setCoin(coin - player.priceInAuction);
      toast.success(`Congratulation  !!  ${player.name} is  selected`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleIsActiveState = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  const fistTimeSetMoney = (claimMoney) => {
    setCoin(coin + claimMoney);
    setChecker(checker + 1);
    toast.success("Credit added to your Account", {
      position: "top-center",
    });
  };

  const handleDelete = (player) => {
    const stayNow = selectedPlayer.filter((p)=>p.id !== player.id)
    setSelectedPlayer(stayNow)
    setCoin(coin + player.priceInAuction)
    toast.warn(`Player removedF`)
    
  };

  return (
    <>
      <Header coin={coin} fistTimeSetMoney={fistTimeSetMoney}></Header>

      <Container
        isActive={isActive}
        handleIsActiveState={handleIsActiveState}
        selectedPlayer={selectedPlayer}
        handleSelectedPlayer={handleSelectedPlayer}
        handleDelete={handleDelete}
      ></Container>
      <Main></Main>
      <ToastContainer />
    </>
  );
}

export default App;

//  https://i.ibb.co.com/0ZT9GTn/profile.png
/* 
echo "# Assignment-7" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/palash00912/Assignment-7.git
git push -u origin main
*/