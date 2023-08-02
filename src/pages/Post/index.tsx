import { Link } from 'react-router-dom';
import style from './Post.module.scss';
import { IICountry } from '../../types/Coutry';

export default function Post({flags, name, nativeName, population, region, subregion, capital, currencies, languages, topLevelDomain, borderCountries}: any) {
    return (
    <section className={style.postContainer}>
        <Link to={'/'}>
          <button>
              Back
          </button>
        </Link>
        <div className={style.countryContainer}>
            <div className={style.img}>
              <img src={flags} alt={`Flag from ${flags}`}/>
            </div>
            <div className={style.infos_container}>
                <h2>{name}</h2>
                <div className={style.infos}>
                    <ul className={style.infos_item}>
                        <li>Native Name: <span>{nativeName}</span></li>
                        <li>Population: <span>{population}</span></li>
                        <li>Region: <span>{region}</span></li>
                        <li>Sub Region: <span>{subregion}</span></li>
                        <li>Capital: <span>{capital}</span></li>
                    </ul>   
                    <ul className={style.infos_item}>
                        <li>Top Level Domain: <span>{topLevelDomain}</span></li>
                        <li>Currencies: <span>{currencies}</span></li>
                        <li>Languages: <span>{languages}</span></li>
                    </ul>
                </div>
            <ul className={style.borderCountries}>
                <h3>Border Countries:</h3>
            {borderCountries ? 
                    borderCountries.map((country: any) =>
                        <li key={country} className={style.borderCountries_item}>{country}</li>
                    ) 
                : ''         
            }
            </ul>
            </div>
        </div>
    </section>
    )
  }