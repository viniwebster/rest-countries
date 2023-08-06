import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { CiDark } from 'react-icons/ci';

interface PropsHeader {
    title: string
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
}

export default function Header({title, setDarkMode, darkMode} :PropsHeader) {

    return (
    <header className={`container`}>
        <div className={`${darkMode ? style.headerDark : style.header}`}>
            <Link to={'/'}>
                <h1 className={style.title}>{title}</h1>
            </Link>
            <div className={style.darkMode} onClick={() => darkMode ? setDarkMode(false) : setDarkMode(true)}>
                <CiDark size={25}/>
                <p>Dark Mode</p>
            </div>
        </div>
    </header>
  )
}
