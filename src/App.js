import "./App.css";
import Home from "./HomeStore/Home/Home";
import Header from "./Nav/Header";
import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import SingleBeer from "./SingleBeer/SingleBeer";

function App() {
  return (
    <>
      <BrowserRouter>
     
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/beers/:id" element={<SingleBeer />}></Route>
          </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
