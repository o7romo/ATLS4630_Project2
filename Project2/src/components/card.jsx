import './Card.css';

export default function PlanetCard({PlanetName, ImgPath, PlanetDescription, Distance, Diameter, Moons}){
    return (
        <div id="PlanetCard">
            <h1 id="CardTitle">{PlanetName}</h1>
            <div id="PlanetWrapper">
                <img id="PlanetImage" src={ImgPath}></img>
                <div id="DescHighlights">
                <p id="PlanetDescription">{PlanetDescription}</p>
                    <div id="Highlights">
                        <p class="Highlight"><span>Distance from Earth:</span> {Distance}</p>
                        <p class="Highlight">Diameter: {Diameter}</p>
                        <p class="Highlight">Number of moons: {Moons}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}