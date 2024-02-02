import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ item }) => {
    const { image, title, price, category } = item;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt="imagen del producto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Precio: ${price}
                    </Typography>
                    <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} variant="text" component="div">
                        {category}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Item;