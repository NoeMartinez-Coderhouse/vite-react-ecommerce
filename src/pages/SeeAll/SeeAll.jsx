import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { ITEMS_DB } from '../../constants/global';

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
            <ItemListContainer database={ITEMS_DB} />
        </div>
    )
}

export default SeeAll