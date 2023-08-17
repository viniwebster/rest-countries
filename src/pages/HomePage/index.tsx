import Input from "../../components/Input";
import DropDown from "../../components/DropDown";
import Card from "../../components/Card";
import style from "./HomePage.module.scss";
import { ICountry } from "../../types/ICountry";

interface PropsHomePage {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  countrys: ICountry[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function HomePage({ countrys, setFilter, search, setSearch }: PropsHomePage) {
  return (
    <>
      <section className={`container ${style.search}`}>
        <Input placeholder="Search for a country..." search={search} setSearch={setSearch} />
        <DropDown setFilter={setFilter}/>
      </section>
      <section className="container">
        <ul className={style.cards}>
          {
          countrys.length > 0 
          ? countrys.map((item, index) => (
            <li key={index}>
              <Card
                {...item}
              />
            </li>
          )) 
          : <h2>Country not found</h2>
          }
        </ul>
      </section>
    </>
  );
}
