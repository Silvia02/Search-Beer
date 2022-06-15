import "./App.css";
import Home from "./HomeStore/Home";
import Header from "./Nav/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleBeer from "./SingleBeer/SingleBeer";


function App() {
  return (
    <>
      <Router>
        <Header />
    
        <Routes>
     
          <Route path="/" element={<Home />}></Route>
          <Route path="/beers/:id" element={<SingleBeer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
