import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ItemDetail = ({ item }) => {
    const { image, title, price, description, stock, category } = item;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt="imagen del producto"
                />
                <CardContent>
                    <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 5, padding: 2, textAlign: 'center'}} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}} variant="text" component="div">
                        {description}
                    </Typography>
                    <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} variant="text" component="div">
                        {category}
                    </Typography>
                    <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} variant="text" component="div">
                        {stock} productos
                    </Typography>
                    <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} gutterBottom variant="h6" component="div">
                        Precio: ${price}
                    </Typography>
                    <div className='buyButton'>
                        <RemoveCircleIcon
                            sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                        />
                        <Button variant="text" sx={{fontWeight: 700}} color="secondary" component={Link} to="/shop">Comprar</Button>
                        <AddCircleIcon sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} />
                    </div>
                    
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemDetail;