import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';

export const Banner = ({ router, isMobile }) => {

    return (
        <Box
            id="root"
            sx={{
                scrollMarginTop: '200px',
                backgroundImage: 'url(/images/banner-3.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '488px',
                transform: 'translateY(-32px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
                paddingLeft: { xs: '10px', sm: '30px' }
            }}>
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '24px', sm: '38px', md: '62px' },
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: 'var(--red)',
                    textShadow: ' 1px 1px 2px white',
                    textAlign: 'left',
                }}>платная<br />госпитализация<br />в Москве</Typography>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '12px', sm: '18px', md: '24px' },
                    fontWeight: 500,
                    color: 'var(--blue)',
                    textAlign: 'left',
                    textShadow: ' 1px 1px 2px white',
                    textTransform: 'uppercase',
                }}>
                ПОМОЩЬ В ОРГАНИЗАЦИИ ПЛАТНОЙ ГОСПИТАЛИЗАЦИИ
            </Typography>
            <Typography
                sx={{
                    color: 'var(--red)',
                    textAlign: 'left',
                    fontSize: { xs: '24px', sm: '38px', md: '48px' },
                    fontWeight: 500
                }}>
                {phoneNumber}
            </Typography>
            <Button
                onClick={() => router.push(`tel:${phoneNumber}`)}
                variant="contained"
                color="error"
                sx={{
                    alignSelf: 'start',
                    display: isMobile ? 'block' : 'none'
                }}
            >
                Позвонить
            </Button>
        </Box>
    );
};
