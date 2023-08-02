import style from './Input.module.scss';
import { AiOutlineSearch } from 'react-icons/ai'

interface PropsInput{
    type?: string
    placeholder?: string
    find: (input :string) => void
}

export default function Input({ type='text', placeholder, find}: PropsInput) {
  return (
        <div className={style.input}> 
            <AiOutlineSearch size={25} style={{marginLeft: 20}}/>
            <input type={type} placeholder={placeholder} onChange={(event)=> find(event.target.value)}/>
        </div>
  )
}
