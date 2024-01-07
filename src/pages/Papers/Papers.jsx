import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import PapersCategory from '../PapersCategory/PapersCategory';

const linkSX = {
    margin: '10px',
    
    "&:hover": {
        border: "1px solid #FFFFF",
        color: "#9C27B0",
        backgroundColor: "#FFFFF",
        fontWeight: 700
    }
};

const Papers = () => {
    return (
        <div>
            <h1>Papelería</h1>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/">Volver al inicio</Button>
            <PapersCategory />
        </div>
    )
}

export default Papers