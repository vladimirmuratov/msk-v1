import {Box, Typography} from '@mui/material'

export const BannerCardsBlock = () => {
    return (
        <Box sx={{height: '200px', display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, transform: 'translateY(-32px)'}}>
            <Box className='bannerCard' sx={{backgroundColor: '#32A4AA'}}>
                <Typography>Экстренная госпитализация</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#2CAEB4'}}>
                <Typography>Госпитализация без полиса ОМС</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#35B7BC'}}>
                <Typography>Работа с тяжелыми пациентами</Typography>
            </Box>
            <Box className='bannerCard' sx={{backgroundColor: '#3FC1C7'}}>
                <Typography>Собственная патронажная служба</Typography>
            </Box>
        </Box>
    )
}
