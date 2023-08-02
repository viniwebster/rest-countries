import React from "react";
import style from "./Country.module.scss";
import { ICountry } from "../../types/ICountry";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Post from "../Post";

export default function CountryPage() {
  const parametros = useParams();
  const dados = data.find((item) => item.name === parametros.name);

  return (
    <Post
      nativeName={dados?.nativeName}
      capital={dados?.capital}
      flags={dados?.flags.svg}
      name={dados?.name}
      population={dados?.population}
      region={dados?.region}
      subregion={dados?.subregion}
      languages={dados?.languages[0].name}
      topLevelDomain={dados?.topLevelDomain}
      borderCountries={dados?.borders}
    />
  );
}
