import {Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const Banner = ({router, isMobile}) => {

    return (
        <Box
            sx={{
                backgroundImage: 'url(/images/banner-2.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '488px',
                transform: 'translateY(-32px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px'
            }}>
            <Typography
                variant='h1'
                sx={{
                    fontSize: {xs: '24px', sm: '38px', md: '62px'},
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: 'var(--red)',
                    textShadow: ' 1px 1px 2px white',
                    textAlign: 'center',
                }}>платная госпитализация в Москве</Typography>
            <Typography
                variant='h2'
                sx={{
                    fontSize: {xs: '12px', sm: '18px', md: '24px'},
                    fontWeight: 500,
                    color: 'var(--white)',
                    textAlign: 'center',
                    textShadow: ' 1px 1px 2px gray',
                    textTransform: 'uppercase',
                }}>
                ПОМОЩЬ В ОРГАНИЗАЦИИ ПЛАТНОЙ ГОСПИТАЛИЗАЦИИ
            </Typography>
            <Typography
                sx={{
                    color: 'var(--red)',
                    textAlign: 'center',
                    fontSize: {xs: '24px', sm: '38px', md: '48px'},
                    fontWeight: 500
                }}>
                {phoneNumber}
            </Typography>
            <Button
                onClick={() => router.push(`tel:${phoneNumber}`)}
                variant="contained"
                color="error"
                sx={{alignSelf: 'center', display: isMobile ? 'block' : 'none'}}
            >
                Позвонить
            </Button>
        </Box>
    )
}
