import React from 'react';
import style from './DropDown.module.scss';

interface PropsDropdown {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropDown({ setFilter } :PropsDropdown) {
  return (
    <select className={style.select} onChange={(e) => setFilter(e.target.value)}>
        <option value=""> All </option> 
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
