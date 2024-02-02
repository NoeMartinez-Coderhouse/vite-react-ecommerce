import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { ITEMS_DB } from "../../constants/global";
import { Button } from "@mui/material";
import Item from "../../components/Item/Item";

const ItemsCategory = () => {
    const [items, setItems] = useState([]);
    let { category } = useParams();

    useEffect(() => {
        const getData = async () => {
            const docs = [];
            const q = query(
                collection(db, ITEMS_DB),
                where("category", "==", category)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setItems(docs);
        };
        getData();
      }, [category, items]);

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
            <div className="cards-list">
                {items.map((item) => {
                    return (
                        <Link style={{ textDecoration: 'none' }} key={item.id} to={`/item/${item.id}`}>
                            <Item key={item.id} item={item} />
                        </Link>
                    )
                })}
            </div>
        </>
    )
};

export default ItemsCategory;