import Input from "../../components/Input";
import DropDown from "../../components/DropDown";
import Card from "../../components/Card";
import style from "./HomePage.module.scss";

interface PropsHomePage {
  filter: (selection: string) => void;
  find: (input: string) => void;
  countrys: any[];
}

export default function HomePage({ filter, find, countrys }: PropsHomePage) {
  return (
    <>
      <section className={`container ${style.search}`}>
        <Input placeholder="Search for a country..." find={find} />
        <DropDown filter={filter} />
      </section>
      <section className="container">
        <ul className={style.cards}>
          {countrys.map((item) => (
            <li>
              <Card
                key={item.name}
                flags={item.flags.svg}
                name={item.name}
                capital={item.capital}
                population={item.population}
                region={item.region}
                nativeName={item.languages.nativeName}
                subRegion={item.subRegion}
                topLevelDomain={item.topLevelDomain}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
