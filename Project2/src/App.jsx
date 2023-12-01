import { Suspense, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlanetCard from './components/Card.jsx'
import ModelCanvas from './components/3DModel.jsx'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'


function App() {
  return (
   
    <>
    <h1 id="title">The Solar System</h1>
    <Canvas style={{ width: '100%', height: '100vh' }}>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <OrbitControls/>
              <ModelCanvas scale={[.2,.2,.2]}/>
          
          </Canvas>

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
        PlanetName={"Mercury"}
        ImgPath={"../src/assets/img/mercury.png"}
        PlanetDescription={"Mercury, our solar system's innermost planet, is a small, rocky world with a diameter of around 4,880 kilometers. Despite its size, Mercury's surface features diverse terrain, including impact craters, cliffs, and smooth plains. Its proximity to the sun creates extreme temperature fluctuations, ranging from a scorching 800 degrees Fahrenheit during the day to a frigid -290 degrees Fahrenheit at night. This swift orbiter completes an orbit around the sun in just 88 Earth days. Scientists have explored Mercury through missions like MESSENGER, aiming to understand its geological composition, magnetic field, and formation. Studying Mercury not only unveils the planet's unique characteristics but also enhances our broader understanding of the solar system's evolution."}
        Distance={"101.41 million miles"}
        Diameter={"3,032 miles"}
        Moons={"0 moons"}
      >
      </PlanetCard>

      <PlanetCard 
        PlanetName={'Venus'} 
        ImgPath={'../src/assets/img/venus.png'}
        PlanetDescription={"Venus, the second planet from the Sun, is often referred to as Earth's 'sister planet' due to its similar size and composition. However, beneath this apparent resemblance lies a world of extreme conditions. Venus is shrouded in a thick, toxic atmosphere primarily composed of carbon dioxide with clouds of sulfuric acid, creating a runaway greenhouse effect that makes it the hottest planet in our solar system. Surface temperatures can soar to a scorching 467 degrees Celsius (872 degrees Fahrenheit), exceeding those on Mercury, the closest planet to the Sun. Venus rotates slowly and retrograde, meaning it spins in the opposite direction to most planets, with a day on Venus lasting longer than its year. Despite these inhospitable conditions, Venus has captivated scientists' interest, and various missions have been launched to study its atmosphere and surface, revealing insights into the complex dynamics of planetary evolution."}
        Distance={"25 million miles"}
        Diameter={"7,521 miles"}
        Moons={"0 Moons"}
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
        PlanetName={"Mars"}
        ImgPath={"../src/assets/img/mars.png"}
        PlanetDescription={"Mars, the fourth planet from the sun, is known for its striking red hue and diverse terrain. Featuring vast plains, towering volcanoes, and the impressive Valles Marineris canyon system, Mars has been a subject of fascination for astronomers. Recent exploration missions, including rovers like Curiosity and Perseverance, have unveiled valuable insights into the planet's geology and potential for past microbial life. With its harsh surface conditions and thin carbon dioxide atmosphere, Mars remains a target for future exploration, sparking continued interest and scientific inquiry."}
        Distance={"233.56 million miles"}
        Diameter={"4,212 miles"}
        Moons={"2 moons"}
      ></PlanetCard>

      
      <PlanetCard
        PlanetName={"Jupiter"}
        ImgPath={'../src/assets/img/jupiter.png'}
        PlanetDescription={"Jupiter, the largest planet in our solar system, commands attention with its colossal presence and intriguing features. As a gas giant primarily composed of hydrogen and helium, Jupiter's immense size sets it apart, dwarfing all other planets. The planet's dynamic atmosphere showcases vivid bands of clouds, and its most notable feature, the Great Red Spot, is a massive storm that has been raging for centuries. With a powerful magnetic field, Jupiter plays a crucial role in shaping the dynamics of our solar system. Its immense gravitational influence impacts nearby celestial bodies and contributes to the stability of the solar system as a whole. Jupiter also hosts a diverse system of moons, with over 80 known natural satellites, including the four largest known as the Galilean moons—Io, Europa, Ganymede, and Callisto."}
        Distance={"382.08 million miles"}
        Diameter={"86,881 miles"}
        Moons={"95 moons"}
      ></PlanetCard>



      <PlanetCard 
        PlanetName={'Saturn'} 
        ImgPath={'../src/assets/img/saturn.png'}
        PlanetDescription={"Saturn, the sixth planet from the Sun in our solar system, is a gas giant renowned for its stunning ring system, which makes it one of the most visually distinctive celestial bodies. The planet is characterized by its pale yellow hue, attributed to the presence of ammonia crystals in its atmosphere. Saturn is approximately nine times the diameter of Earth and boasts a relatively low density, allowing it to float in water, albeit in a hypothetical giant bathtub. Its prominent and intricate ring system, composed primarily of ice particles and rocky debris, adds to its allure, making Saturn a captivating object of study for astronomers and a source of fascination for space enthusiasts. Beyond its captivating appearance, Saturn's vast and dynamic atmosphere exhibits swirling cloud patterns, including a hexagonal-shaped storm at its north pole. The planet is orbited by a diverse array of moons, each contributing to the complexity of this majestic gas giant"}
        Distance={"746 million"}
        Diameter={"74,898 miles"}
        Moons={"82 Moons"}
        >
      </PlanetCard> 
      
      <PlanetCard 
        PlanetName={'Uranus'} 
        ImgPath={'../src/assets/img/uranus.png'}
        PlanetDescription={"Uranus, the seventh planet from the Sun in our solar system, stands out for its unique features. It is an ice giant, primarily composed of hydrogen, helium, and methane. What distinguishes Uranus is its unusual rotational axis—tilted at about 98 degrees relative to its orbit, causing it to rotate almost on its side. This distinct tilt results in extreme seasonal variations and peculiar ring and moon orientations. The planet's atmosphere is marked by layers of clouds, including methane and ammonia crystals, contributing to its pale blue-green appearance. Uranus has a set of faint rings and a collection of diverse moons, with the five largest being Miranda, Ariel, Umbriel, Titania, and Oberon. Its characteristics make Uranus an intriguing subject for scientific exploration, as researchers seek to unravel the mysteries of this distant and enigmatic ice giant."}
        Distance={"1.6 billion miles"}
        Diameter={"31,763 miles"}
        Moons={"27 Moons"}
        >
      </PlanetCard> 

      <PlanetCard
        PlanetName={"Neptune"}
        ImgPath={"../src/assets/img/neptune.png"}
        PlanetDescription={"Neptune, the eighth and farthest planet from the sun in our solar system, is a captivating ice giant known for its striking deep-blue coloration. This gas giant, primarily composed of hydrogen, helium, and traces of methane, possesses a dynamic atmosphere featuring distinct cloud bands and a prominent dark storm system named the Great Dark Spot. Neptune's winds are some of the fastest in the solar system, reaching speeds of over 1,200 miles per hour. Despite its distant location, Neptune has been the subject of scientific curiosity, with space missions like Voyager 2 providing valuable insights into its unique features and atmospheric dynamics."}
        Distance={"2.7519 billion miles"}
        Diameter={"34,503 miles"}
        Moons={"14 moons"}
      >
      </PlanetCard>


      

    </>
  );
}

export default App
