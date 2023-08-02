import style from './Header.module.scss';
import { CiDark } from 'react-icons/ci';

interface PropsHeader {
    title: string
}

export default function Header({title} :PropsHeader) {
  return (
    <header className='container'>
        <div className={style.header}>
            <a href='/'>
                <h1 className={style.title}>{title}</h1>
            </a>
            <div className={style.darkMode}>
                <CiDark size={25}/>
                <p>Dark Mode</p>
            </div>
        </div>
    </header>
  )
}
