import "./ItemsList.css"
import ItemCard from "../ItemCard/ItemCard";

const ItemsList = ({items}) => {
    return (
        <div className="ItemsList">
            {items.map(item => {
                return <ItemCard item={item} key={item.id} />
            })}
        </div>
    );
};

export default ItemsList;