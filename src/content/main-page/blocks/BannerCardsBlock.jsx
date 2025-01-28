import {Box, Typography} from '@mui/material'

export const BannerCardsBlock = () => {
    return (
        <Box sx={{height: '200px', display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, transform: 'translateY(-32px)'}}>
            <Box className='bannerCard' sx={{backgroundColor: 'var(--blue)'}}>
                <Typography variant='h2'>Экстренная госпитализация</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#368aff'}}>
                <Typography variant='h2'>Госпитализация без полиса ОМС</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#4c97ff'}}>
                <Typography variant='h2'>Перевод из одной больницы в другую</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#62a4ff'}}>
                <Typography variant='h2'>Собственная патронажная служба</Typography>
            </Box>
        </Box>
    )
}
