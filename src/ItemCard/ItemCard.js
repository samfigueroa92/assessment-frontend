import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { image, name, price, shortDescription, toppings } = item;

  return (
    <div className="ItemCard">
      <div className="ItemCard__header">{name}</div>
      <div className="ItemCard__info">
        <div>{shortDescription}</div>
        <img src={image} alt={name} />
        <div>Price: ${price}</div>
        <div>Toppings: {toppings.length > 0 ? toppings.join(", ") : "None"}</div>
      </div>
    </div>
  );
};

export default ItemCard;
