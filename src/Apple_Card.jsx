import photo from "./assets/apple.jpeg"

function apple_Card(){
    return(
        <div className="apple_card">
            <img classname="apple_card-image" src={photo} alt="photo of an apple"></img>
            <h2 className="apple_card-title">Apple </h2>
            <p className="apple_card-description">An apple is a round, edible fruit produced by an apple tree</p>
        </div>
        
    );
}

export default apple_Card
