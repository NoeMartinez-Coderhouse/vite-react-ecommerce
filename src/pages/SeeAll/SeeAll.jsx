import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListItems from "../../components/ListItems/ListItems"

const linkSX = {
    margin: '10px',
    
    "&:hover": {
        border: "1px solid #FFFFF",
        color: "#9C27B0",
        backgroundColor: "#FFFFF",
        fontWeight: 700
    }
};

const SeeAll = () => {
    return (
        <div>
            <h1>Ver todo</h1>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/">Volver al inicio</Button>
            <ListItems />
        </div>
    )
}

export default SeeAll