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
        Moons={"0 moons"}
        >
      </PlanetCard> 

      <PlanetCard
        PlanetName={'Earth'}
        ImgPath={'../src/assets/img/earth.png'}
        PlanetDescription={"Earth, the third planet from the sun, is a diverse and dynamic sphere with a diameter of 12,742 kilometers. Its life-sustaining atmosphere, composed mainly of nitrogen and oxygen, supports a wide range of ecosystems. About 71% of Earth's surface is covered by water, crucial for the water cycle and climate regulation. Orbiting at an average distance of 149.6 million kilometers, Earth takes approximately 365.25 days to complete one orbit, creating the concept of a year. With an axial tilt of 23.5 degrees, Earth experiences changing seasons. Human civilization thrives on this unique planet, making it essential to understand and preserve its delicate ecosystems for the well-being of its diverse life forms."}
        Distance={"0 miles"}
        Diameter={"7,918 miles"}
        Moons={"1 moon"}
      >
        </PlanetCard> 
      
      <PlanetCard
        PlanetName={"Jupiter"}
        ImgPath={'../src/assets/img/jupiter.png'}
        PlanetDescription={"Jupiter, the largest planet in our solar system, commands attention with its colossal presence and intriguing features. As a gas giant primarily composed of hydrogen and helium, Jupiter's immense size sets it apart, dwarfing all other planets. The planet's dynamic atmosphere showcases vivid bands of clouds, and its most notable feature, the Great Red Spot, is a massive storm that has been raging for centuries. With a powerful magnetic field, Jupiter plays a crucial role in shaping the dynamics of our solar system. Its immense gravitational influence impacts nearby celestial bodies and contributes to the stability of the solar system as a whole. Jupiter also hosts a diverse system of moons, with over 80 known natural satellites, including the four largest known as the Galilean moons—Io, Europa, Ganymede, and Callisto."}
        Distance={"382.08 million miles"}
        Diameter={"86,881 miles"}
        Moons={"95 moons"}
      ></PlanetCard>

      <PlanetCard
        PlanetName={"Mars"}
        ImgPath={"../src/assets/img/mars.png"}
        PlanetDescription={"Mars, the fourth planet from the sun, is known for its striking red hue and diverse terrain. Featuring vast plains, towering volcanoes, and the impressive Valles Marineris canyon system, Mars has been a subject of fascination for astronomers. Recent exploration missions, including rovers like Curiosity and Perseverance, have unveiled valuable insights into the planet's geology and potential for past microbial life. With its harsh surface conditions and thin carbon dioxide atmosphere, Mars remains a target for future exploration, sparking continued interest and scientific inquiry."}
        Distance={"233.56 million miles"}
        Diameter={"4,212 miles"}
        Moons={"2 moons"}
      ></PlanetCard>

      <PlanetCard
        PlanetName={"Mercury"}
        ImgPath={"../src/assets/img/mercury.png"}
        PlanetDescription={"Mercury, our solar system's innermost planet, is a small, rocky world with a diameter of around 4,880 kilometers. Despite its size, Mercury's surface features diverse terrain, including impact craters, cliffs, and smooth plains. Its proximity to the sun creates extreme temperature fluctuations, ranging from a scorching 800 degrees Fahrenheit during the day to a frigid -290 degrees Fahrenheit at night. This swift orbiter completes an orbit around the sun in just 88 Earth days. Scientists have explored Mercury through missions like MESSENGER, aiming to understand its geological composition, magnetic field, and formation. Studying Mercury not only unveils the planet's unique characteristics but also enhances our broader understanding of the solar system's evolution."}
        Distance={"101.41 million miles"}
        Diameter={"3,032 miles"}
        Moons={"0 moons"}
      >
      </PlanetCard>

    </>
  );
}

export default App
