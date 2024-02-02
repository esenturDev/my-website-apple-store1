import scss from './Section_6.module.scss';
export const Section_6 = () => {
  return (
    <section className={scss.section6}>
      <div className='container'>
        <div className={scss.content}>
          <div className={scss.card11}>
            <img src="https://istore.kg/static/_image/istore_logo.png" alt="logo" />
            <p>Магазин техники Apple в Бишкеке</p>
            <h3>Режим работы</h3>
            <p className={scss.p}>Пн - Вс 10:00 - 20:00</p>
          </div>
          <div className={scss.divbar}>
            <p>Продукция</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
          </div>
          <div className={scss.divbar}>
            <p>10 лет с Вами!</p>
            <p>О нас</p>
            <p>Обратная связь</p>
          </div>
          <div className={scss.divbar}>
            <p>Контакты</p>
            <p>пр. Манаса, 40 (пер. ул. Киевская)</p>
            <p>+996 (555) 802 000 +996 (505) 802 000</p>
            <p>office@istore.kg</p>
          </div>
        </div>
      </div>
    </section>
  )
}
