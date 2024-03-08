import {Avatar, Box, Typography} from '@mui/material'

export const GreenBlock = () => {
    return (
        <Box
            component='section'
            sx={{
            backgroundColor: 'var(--green)',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: {xs: '40px', sm: '80px'},
            padding: {xs: '20px', sm: '67px'}
        }}>
            <Avatar src="/images/doctors/doctor4.png" alt="pic" sx={{width: '150px', height: '150px'}}/>
            <Typography
                sx={{fontSize: {xs: '24px', sm: '32px'}, color: 'var(--white)', textAlign: {xs: 'center', sm: 'left'}, lineHeight: 1.3}}>
                Будьте уверены: в любой момент мы рядом с вами!
            </Typography>
        </Box>
    )
}
