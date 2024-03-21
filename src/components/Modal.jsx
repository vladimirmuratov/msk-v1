import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import {Box} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export const Modal = ({title = '', children, open, handleClose}) => {


    return (
        <Box>
            <Dialog
                fullWidth
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Box id='alert-dialog-slide-description' sx={{paddingTop: '10px'}}>
                        {children}
                    </Box>
                </DialogContent>

            </Dialog>
        </Box>
    )
}
