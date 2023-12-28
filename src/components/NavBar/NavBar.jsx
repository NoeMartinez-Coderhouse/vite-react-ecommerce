import CartWidget from "../CartWidget/CartWidget"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '../MenuContainer/MenuContainer'

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
            <Menu/>
            <CartWidget />
        </Toolbar>
    )
}

export default NavBar;