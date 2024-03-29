import React from "react";
import { ICountry } from "../../types/ICountry";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Post from "../Post";

export default function CountryPage() {
  const params = useParams();
  const dataCountries: ICountry[] = data
  const dados = dataCountries.find((item) => item.name === params.name);

  return (
    dados !== undefined 
    ? <Post {...dados} /> 
    : <h1> Não foi possivel encontrar as informações </h1>
  )
}
