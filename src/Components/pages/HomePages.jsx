import scss from './HomePages.module.scss';
// import { Section_1 } from './section_1/Section_1';
import { Section_2 } from './section_2/Section_2';
import { Section_3 } from './section_3/Section_3';
import { Section_4 } from './section_4/Section_4';
import { Section_5 } from './section_5/Section_5';
import { Section_6 } from './section_6/Section_6';

export const HomePages = () => {
  return (
    <div className={scss.HomePages}>
      {/* <Section_1/> */}
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
    </div>
  )
}
