import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const linkSX = {
    "&:hover": {
        border: "1px solid #FFFFF",
        color: "#9C27B0",
        backgroundColor: "#FFFFF",
        fontWeight: 700
    }
};

const Account = () => {
    return (
        <div>
            <h1>Mi Cuenta</h1>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/">Volver al inicio</Button>
        </div>
    )
}

export default Account