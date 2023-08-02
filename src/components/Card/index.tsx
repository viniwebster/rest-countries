import React from 'react';
import style from './Card.module.scss';
import { ICountry } from '../../types/ICountry';
import { Link } from "react-router-dom";

export default function Card({ flags, name, region, population, capital } :ICountry) {
  return (
  <Link style={{textDecoration: 'none', color: 'black'}} to={`/${name}`}>
    <div className={style.card}>
        <div className={style.img}>
            <img src={`${flags}`} alt={`Bandeira ${name}`}/>           
        </div>
        <ul className={style.infos}>
            <h2 className={style.infos_titulo}>{name}</h2>
            <li className={style.infos_item}>Population: <span>{population}</span></li>
            <li className={style.infos_item}>Region: <span>{region}</span></li>
            <li className={style.infos_item}>Capital: <span>{capital}</span></li>
        </ul>
    </div>
  </Link>
  )
}
