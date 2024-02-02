import { useEffect, useState } from 'react';
// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({database}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const docs = [];
            const q = query(collection(db, database));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setData(docs);
        }
        getData();
      }, []);

    return (
        <ItemList items={data} />
    )
};

export default ItemListContainer;