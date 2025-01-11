import photo from "./assets/banana.jpeg"

function banana_Card(){
    return(
        <div className="banana_card">
            <img classname="banana_card-image" src={photo} alt="photo of an banana"></img>
            <h2 className="banana_card-title">Banana </h2>
            <p className="banana_card-description">A banana is an elongated, edible fruit</p>
        </div>
        
    );
}

export default banana_Card
