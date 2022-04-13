import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Custom from "./Components/custom";
import Details from "./Components/details";
import Teams from "./Components/teams";
import Pricing from "./Components/pricing";
import Footer from "./Components/footer";
export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Custom />
      <Details />
      <Teams />
      <Pricing />
      <Footer />
    </div>
  );
}
