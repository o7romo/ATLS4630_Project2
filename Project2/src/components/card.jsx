import './Card.css';

export default function PlanetCard({PlanetName, ImgPath}){
    return (
        <div id="PlanetCard">
            <h1 id="CardTitle">{PlanetName}</h1>
            <div id="PlanetWrapper">
                <img src={ImgPath}></img>
                <p>From our vantage point on Earth, the Sun may appear like an unchanging source of light and heat in the sky. But the Sun is a dynamic star, constantly changing and sending energy out into space. The science of studying the Sun and its influence throughout the solar system is called heliophysics.

The Sun is the largest object in our solar system. Its diameter is about 865,000 miles (1.4 million kilometers). Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it.

Even though the Sun is the center of our solar system and essential to our survival, it’s only an average star in terms of its size. Stars up to 100 times larger have been found. And many solar systems have more than one star. By studying our Sun, scientists can better understand the workings of distant stars.</p>
            </div>
        </div>
    );
}