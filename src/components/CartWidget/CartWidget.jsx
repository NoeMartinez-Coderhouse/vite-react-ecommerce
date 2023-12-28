import CartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {
    return (
        <>
            <IconButton color='inherit'>
                <Badge badgeContent={1} color="secondary" max={99} >
                    <CartIcon />
                </Badge> 
            </IconButton>
        </>
    )
}

export default CartWidget;