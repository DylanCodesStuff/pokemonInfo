import React from "react";
import Navbar from "./assets/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./assets/components/Homepage.jsx";
import Pokemon from "./assets/components/Pokemon";
import Berries from "./assets/components/Berries";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/berries" element={<Berries />} />
      </Routes>
    </>
  );
}
