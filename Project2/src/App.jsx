import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlanetCard from './components/Card.jsx'

function App() {

  return (
    <>
      <PlanetCard 
        PlanetName={'The Sun'} 
        ImgPath={'../src/assets/img/sun.png'}
        PlanetDescription={"The sun is a luminous, massive ball of hot, ionized gas, primarily composed of hydrogen and helium, situated at the center of our solar system. It serves as the primary source of light and energy for Earth and its surrounding celestial bodies. With a diameter of about 1.4 million kilometers (870,000 miles), the sun's immense gravitational pull keeps the planets, including Earth, in orbit around it. The sun's core experiences nuclear fusion, converting hydrogen into helium and releasing an immense amount of energy in the process. This energy is radiated as sunlight, providing the necessary heat and light for life on Earth. The sun's surface, or photosphere, exhibits complex patterns of dark sunspots and bright solar flares. It plays a crucial role in shaping the dynamics of the solar system and influencing the space environment around it."}
        Distance={"93 million miles"}
        Diameter={"870,000 miles"}
        Moons={"0 Moons"}
        >
      </PlanetCard>  
    </>
  );
}

export default App
