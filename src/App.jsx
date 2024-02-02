import {useState} from 'react';
import { Layout } from './Components/layout/Layout';
import { HomeResult } from './Components/homeResult/HomeResult';

const App = () => {
  const [state, setState] = useState(false);
  return (
    <>
      {state ? <Layout/> : <HomeResult  setState={setState}/>}
    </>
  )
}

export default App