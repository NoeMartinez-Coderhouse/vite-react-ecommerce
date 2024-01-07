import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CardItem from "../../components/CardItem/CardItem";

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    let {id} = useParams();

    useEffect(()  => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then((json) =>
                setItem(json.data)
            );
    }, [id]);

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
            <div style={{display: "flex", justifyContent: "center", margin: 20}}>
                {item.id ? <CardItem item={item} /> : null}
            </div>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/">Volver al inicio</Button>
        </>
    )
}

export default ItemDetailContainer