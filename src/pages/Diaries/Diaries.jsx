import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListDiaries from "./../../components/ListDiaries/ListDiaries"

const linkSX = {
    margin: '10px',

    "&:hover": {
        border: "1px solid #FFFFF",
        color: "#9C27B0",
        backgroundColor: "#FFFFF",
        fontWeight: 700
    }
};

const Diaries = () => {
    return (
        <div>
            <h1>Agendas 2024</h1>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/">Volver al inicio</Button>
            <ListDiaries />
        </div>
    )
}

export default Diaries