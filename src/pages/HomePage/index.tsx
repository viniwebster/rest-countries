import Input from "../../components/Input";
import DropDown from "../../components/DropDown";
import Card from "../../components/Card";
import style from "./HomePage.module.scss";
import { ICountry } from "../../types/ICountry";

interface PropsHomePage {
  filter: (selection: string) => void;
  find: (input: string) => void;
  countrys: ICountry[];
  setData: React.Dispatch<React.SetStateAction<ICountry[]>>
}

export default function HomePage({ filter, find, countrys, setData }: PropsHomePage) {
  return (
    <>
      <section className={`container ${style.search}`}>
        <Input placeholder="Search for a country..." find={find} />
        <DropDown filter={filter} setData={setData}/>
      </section>
      <section className="container">
        <ul className={style.cards}>
          {countrys.map((item) => (
            <li>
              <Card
                key={item.name}
                {...item}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
