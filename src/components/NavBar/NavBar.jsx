import CartWidget from "../CartWidget/CartWidget"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const linkSX = {
    "&:hover": {
        border: "1px solid #FFFFF",
        color: "#9C27B0",
        backgroundColor: "#FFFFF",
        fontWeight: 700
    }
};

const NavBar = () => {
    return (
        <Toolbar sx={{justifyContent: 'space-between' }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{mr: 2, display: 'flex', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', gap: 80}}
            >
                Benni
            </Typography>
            <Button variant="text" color="inherit" sx={linkSX} onClick={null}>Agendas 2024</Button>
            <Button variant="text" color="inherit" sx={linkSX} onClick={null}>Promos</Button>
            <Button variant="text" color="inherit" sx={linkSX} onClick={null}>Papelería</Button>
            <Button variant="text" color="inherit" sx={linkSX} onClick={null}>Accesorios</Button>
            <Button variant="text" color="inherit" sx={linkSX} onClick={null}>Ver todo</Button>
            <Button variant="text" color="inherit" sx={linkSX} onClick={null}>Mi cuenta</Button>
            <CartWidget />
        </Toolbar>
    )
}

export default NavBar;