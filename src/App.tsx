import "./styles/style.scss";
import data from "./data.json";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import PaginaPadrao from "./pages/PaginaPadrao";
import { ICountry } from "./types/ICountry";

function App() {
  const [countrys, setData] = useState<ICountry[]>(data);

  function search(input: string) {
    const filter = data.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    setData(filter);
  }

  function filter(selection: string) {
    const filter = data.filter((coutry) => coutry.region === selection);
    setData(filter);
  }

  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <>
    <div className={`${darkMode ? 'darkMode' : ''}`}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPadrao darkMode={darkMode} setDarkMode={setDarkMode}/>}>
              <Route index element={<HomePage filter={filter} find={search} countrys={countrys} setData={setData}/>}/>
              <Route path="/:name" element={<CountryPage />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;