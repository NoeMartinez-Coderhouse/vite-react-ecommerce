import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";

const PapersCategory = () => {
    const [items, setItems] = useState([]);
    const params = useParams();

    useEffect(()  => {
        axios(`https://rickandmortyapi.com/api/character?gender=${params.categoryId}&species=${params.speciesId}`)
            .then((json) =>
                setItems(json.data.results)
            );
    }, []);
    
    return (
        <>
            <div className="cards-list">
                { items.map((i) => {
                    return (
                        <div style={{ margin: 10 }} key={i.id}>
                            <Link to={`/item/${i.id}`}>
                                <CardItem item={i} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default PapersCategory;