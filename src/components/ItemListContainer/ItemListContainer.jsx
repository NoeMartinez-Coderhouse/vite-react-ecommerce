import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

const ItemListContainer = ({greeting}) => {
    const title = 'Bienvenidos';
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" color={'inherit'} onClick={handleClickOpen} sx={{justifyContent: 'start'}}>
                Bienvenida
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <CloseIcon fontSize='2' sx={{padding: 1}} onClick={handleClose} />
                <DialogTitle sx={{textAlign: 'center'}} id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {greeting}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ItemListContainer;