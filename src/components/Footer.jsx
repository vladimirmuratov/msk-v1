import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: 'var(--black)',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: {xs: '38px', sm: '68px'},
            paddingY: '20px'
        }}>
                <Typography sx={{color: 'var(--white)', fontSize: '20px', fontWeight: 600, letterSpacing: 2}}>МСК</Typography>
            <Box sx={{color: 'var(--white)', display: 'flex', flexDirection: 'column', alignItems: {xs: 'flex-start', sm: 'flex-end'}}}>
                <Typography sx={{fontSize: '14px'}}>г. Москва, Мичуринский пр-т, д. 6</Typography>
                <Typography sx={{fontSize: '14px'}}>{phoneNumber}</Typography>
            </Box>
        </Box>
    )
}
