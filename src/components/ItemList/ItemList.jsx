import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({items}) => {
    return (
        <div className="cards-list">
            {items.map((item) => {
                return (
                    <Link style={{ textDecoration: 'none' }} key={item.id} to={`/item/${item.id}`}>
                        <Item item={item} />
                    </Link>
                );
            })}
        </div>
    )
};

export default ItemList;