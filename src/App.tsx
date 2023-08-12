import "./styles/style.scss";
import data from "./data.json";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import PaginaPadrao from "./pages/PaginaPadrao";
import { ICountry } from "./types/ICountry";

function App() {
  const [countrys, setData] = useState<ICountry[]>(data);
  const [order, setOrder] = useState('');
  const [search, setSearch] = useState('');

  function searchByText(input: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(input)
  }

  function filterByRegion(region: string) {
    return order === region
  }

  useEffect(()=> {
    const countrysFilter = data.filter((item) => searchByText(item.name) && filterByRegion(item.region)); 
    setData(countrysFilter);
    if(order === "") setData(data.filter((item) => searchByText(item.name)));
  }, [search, order])

  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <>
    <div className={`${darkMode ? 'darkMode' : ''}`}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPadrao darkMode={darkMode} setDarkMode={setDarkMode}/>}>
              <Route index element={<HomePage setFilter={setOrder} search={search} setSearch={setSearch} countrys={countrys} />}/>
              <Route path="/:name" element={<CountryPage />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;