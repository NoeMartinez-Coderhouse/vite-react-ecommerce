import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardItem = ({ item }) => {
    console.log(item)
    const { image, name, status, species, origin } = item;
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
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {status} | {species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {origin.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardItem;