import React, { useState } from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import './Darkmode.scss';

interface PaginaPadrao {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean
}

export default function PaginaPadrao({ darkMode, setDarkMode }: PaginaPadrao) {
   
  return (
    <>
      <Header title="Where in the world?" darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
