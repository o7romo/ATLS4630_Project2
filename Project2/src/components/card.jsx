import './Card.css';

export default function PlanetCard({PlanetName, ImgPath, PlanetDescription}){
    return (
        <div id="PlanetCard">
            <h1 id="CardTitle">{PlanetName}</h1>
            <div id="PlanetWrapper">
                <img id="PlanetImage" src={ImgPath}></img>
                <p id="PlanetDescription">{PlanetDescription}</p>
            </div>
        </div>
    );
}