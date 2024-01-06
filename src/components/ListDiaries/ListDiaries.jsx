import { useEffect, useState } from "react";
import axios from "axios";
import CardDiary from "../CardDiary/CardDiary";
import { Link } from "react-router-dom";

const ListDiaries = () => {
    const [diaries, setDiaries] = useState([]);

    useEffect(()  => {
        axios("https://rickandmortyapi.com/api/character").then((res) =>
            setDiaries(res.data.results)
        );
    }, []);

    return (
        <div className="cards-list">
            { diaries.map((diary) => {
                return (
                    <div  key={diary.id}>
                        <Link to={`/item/${diary.id}`}>
                            <CardDiary diary={diary} />
                        </Link>
                    </div>
                );
            })}
        </div>
    )
};

export default ListDiaries