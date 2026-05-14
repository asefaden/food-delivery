import { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";
import ExploreMenu from "../../Components/Explore/ExploreMenu";
const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  );
};

export default Home;
