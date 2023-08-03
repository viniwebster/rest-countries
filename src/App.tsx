import "./styles/style.scss";
import data from "./data.json";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import PaginaPadrao from "./pages/PaginaPadrao";

function App() {
  const [countrys, setData] = useState(data);

  function find(input: string) {
    const filter = data.filter((country) =>
      country.name.toLowerCase().includes(input)
    );
    setData(filter);
  }

  function filter(selection: string) {
    const filter = data.filter((coutry) => coutry.region === selection);
    setData(filter);
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<HomePage filter={filter} find={find} countrys={countrys} />}/>
              <Route path="/:name" element={<CountryPage />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;