import style from './Input.module.scss';
import { AiOutlineSearch } from 'react-icons/ai'

interface PropsInput{
    type?: string
    placeholder?: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}

export default function Input({ type='text', placeholder, setSearch, search}: PropsInput) {
  return (
        <div className={style.input}> 
            <AiOutlineSearch size={25} style={{marginLeft: 20}}/>
            <input type={type} placeholder={placeholder} onChange={(event)=> setSearch(event.target.value)} value={search}/>
        </div>
  )
}
