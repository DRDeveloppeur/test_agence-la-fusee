// import "./style.css";
import { Snackbar, Stack } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import MuiAlert from '@mui/material/Alert';

const Flash = ({ flash }) => {
    const [open, setOpen] = useState(false);
    const vertical = 'top';
    const horizontal = 'center';
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(() => {
        flash.message && setOpen(true);
    }, [flash]);

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={flash.type} sx={{ width: '100%' }}>
                    {flash.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default Flash;