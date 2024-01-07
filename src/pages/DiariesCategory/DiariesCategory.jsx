import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CardItem from "../../components/CardItem/CardItem";

const DiariesCategory = () => {
    const [items, setItems] = useState([]);
    let param = useParams();

    useEffect(()  => {
        axios(`https://rickandmortyapi.com/api/character?gender=${param.categoryId}`)
            .then((json) =>
                setItems(json.data.results)
            );
            console.log(items)
    }, []);

    const linkSX = {
        margin: '10px',
        
        "&:hover": {
            border: "1px solid #FFFFF",
            color: "#9C27B0",
            backgroundColor: "#FFFFF",
            fontWeight: 700
        }
    };
    
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

export default DiariesCategory;