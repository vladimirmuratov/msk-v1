import { Box, Link, Typography } from '@mui/material';
import { phoneNumber } from '@/config';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'var(--blue)',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: { xs: '20px', sm: '30px' },
                paddingY: '20px'
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <Typography
                    sx={{ color: 'var(--white)', fontSize: '20px', fontWeight: 600, letterSpacing: 2 }}>
                    МСК
                </Typography>
                <Typography
                    sx={{ color: 'var(--white)' }}>
                    &copy;
                </Typography>
                <Typography
                    sx={{ color: 'var(--white)', fontSize: '14px' }}>
                    2014 — {new Date().getFullYear()}
                </Typography>
            </Box>

            <Box sx={{
                color: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-end' }
            }}>
                <Typography sx={{ fontSize: '14px' }}>г. Москва, Мичуринский пр-т, д. 6</Typography>
                <Link href={`tel:${phoneNumber}`} sx={{ color: 'var(--white)', textDecoration: 'underline' }}>
                    <Typography sx={{ fontSize: { xs: '12px', sm: '16px' }, }}>{phoneNumber}</Typography>
                </Link>
            </Box>
        </Box>
    );
};
