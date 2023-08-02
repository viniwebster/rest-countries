import React from 'react';
import style from './DropDown.module.scss';

interface PropsDropdown {
  filter: (selection: string) => void
}

export default function DropDown({ filter } :PropsDropdown) {
  return (
    <select className={style.select} onChange={(e) => filter(e.target.value)}>
        <option> Filter by Region </option> 
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}