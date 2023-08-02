import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <>
      <Header title="Where in the world?" />
      <main>
        <Outlet />
      </main>
    </>
  );
}
