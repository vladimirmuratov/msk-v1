import {Box, Typography} from '@mui/material'

export const BannerCardsBlock = () => {
    return (
        <Box sx={{height: '200px', display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, transform: 'translateY(-32px)'}}>
            <Box className='bannerCard' sx={{backgroundColor: '#32A4AA'}}>
                <Typography variant='h2'>Экстренная госпитализация</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#2CAEB4'}}>
                <Typography variant='h2'>Госпитализация без полиса ОМС</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#35B7BC'}}>
                <Typography variant='h2'>Работа с тяжелыми пациентами</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#3FC1C7'}}>
                <Typography variant='h2'>Собственная патронажная служба</Typography>
            </Box>
        </Box>
    )
}
