import { Input } from '../../ul/input/Input';
import scss from './Header.module.scss';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className='container'>
        <div className={scss.content}>
          <img src="https://www.istore.kg/static/_image/istore_logo.svg" alt="logo" />
          <div className={scss.div1}>
            <p>Магазин техники <br />Apple в Бишкеке</p>
          </div>
          <div className={scss.div1}>
            <p>пр. Манаса, 40 (пер. ул. Киевская) <br />Пн - Вс 10:00 - 20:00</p>
          </div>
          <div className={scss.div1}>
            <p>+996 (555) 802 000 <br />+996 (505) 802 000</p>
          </div>
          <div>
            <Input texts='поиск по всем категориям'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header