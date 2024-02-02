import scss from './Layout.module.scss';
import { Footer } from './footer/Footer';
import Header from './header/Header';
import { Main } from './main/Main';

export const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
