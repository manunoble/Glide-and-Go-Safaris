import image from './assets/Glideandgo.jpg';

function Card(){
    const CardData= {
        title: "CAMP NDUNDA TRIP",
        description: "Latest Glide and Go Safaris Trip.",
        image: image,
    };
  return (
    <div className="card">
      <h2 className="Title">{CardData.title}</h2>
      <img src={CardData.image} alt="Camp Ndunda Trip" className="Pic" />
      <p className="Description">{CardData.description}</p>
    </div>
  );
}

export default Card;