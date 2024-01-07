import { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";

const ListItems = () => {
    const [items, setItems] = useState([]);

    useEffect(()  => {
        axios("https://rickandmortyapi.com/api/character").then((res) =>
            setItems(res.data.results)
        );
    }, []);

    return (
        <div className="cards-list">
            { items.map((item) => {
                return (
                    <div  key={item.id}>
                        <Link to={`/item/${item.id}`}>
                            <CardItem item={item} />
                        </Link>
                    </div>
                );
            })}
        </div>
    )
};

export default ListItems