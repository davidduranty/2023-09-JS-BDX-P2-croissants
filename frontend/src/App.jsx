import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilmOfDay from "./components/FilmOfDay";
import MoovieCard from "./components/MoovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [api, setApi] = useState();

  useEffect(() => {
    axios.get("https://ghibliapi.vercel.app/films")
    .then((res) => setApi(res))
  }, [])

  return (
    <div>
      <NavBar />
      <FilmOfDay/>
      < MoovieCard api={api}/>
      <Footer />
    </div>
  );
}

export default App;
