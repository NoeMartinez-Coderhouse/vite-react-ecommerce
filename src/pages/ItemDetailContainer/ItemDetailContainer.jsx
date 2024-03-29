import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { ITEMS_DB } from "../../constants/global";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const docs = [];
            const q = query(
                collection(db, ITEMS_DB),
                where(documentId(), "==", id)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setItem(docs);
        };
        getData();
      }, [id, item]);

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
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/">Volver al inicio</Button>
            <div className="detail-card">
                {item.map((i) => {
                    return (
                        <ItemDetail key={i.id} item={i} />
                    )
                })}
            </div>
        </>
    )
};

export default ItemDetailContainer;