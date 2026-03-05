import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FisrtStepsApp } from './FirstStepsApp';
// import { MyAwasomeApp } from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FisrtStepsApp />
    {/* <MyAwasomeApp /> */}
  </StrictMode>,
);
