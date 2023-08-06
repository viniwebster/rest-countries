import React from 'react';
import style from './DropDown.module.scss';
import { ICountry } from '../../types/ICountry';
import data from '../../data.json';

interface PropsDropdown {
  filter: (selection: string) => void
  setData: React.Dispatch<React.SetStateAction<ICountry[]>>
}

export default function DropDown({ filter, setData } :PropsDropdown) {
  return (
    <select className={style.select} onChange={(e) => filter(e.target.value)}>
        <option disabled> Filter by Region </option> 
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
