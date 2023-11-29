import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlanetCard from './components/Card.jsx'

function App() {

  return (
    <>
      <PlanetCard PlanetName={'The Sun'} ImgPath={'../src/assets/img/sun.png'}></PlanetCard>  
    </>
  );
}

export default App
