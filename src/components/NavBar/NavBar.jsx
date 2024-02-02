import CartWidget from "../CartWidget/CartWidget"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const linkSX = {
    "&:hover": {
        border: "1px solid #FFFFF",
        color: "#9C27B0",
        backgroundColor: "#FFFFF",
        fontWeight: 700
    }
};

const NavBar = () => {
    const [items] = useContext(ItemsContext);

    return (
        <Toolbar sx={{justifyContent: 'space-between' }}>
            <Link style={{ textDecoration: 'none' }} to="/">
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{mr: 2, display: 'flex', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'black', gap: 80}}
                >
                    Benni
                </Typography>
            </Link>            
            
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/category/Agendas 2024">Agendas 2024</Button>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/category/Papelería">Papelería</Button>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/category/Accesorios">Accesorios</Button>
            <Button variant="text" color="inherit" sx={linkSX} component={Link} to="/seeAll">Ver todo</Button>
            <CartWidget itemsAmount={items.lenght}/>
        </Toolbar>
    )
}

export default NavBar;