import {Box, Typography} from '@mui/material'

export const BaseServiceBlockCard = ({src, label, alt}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: {xs: '10px', sm: '16px'},
            padding: {xs: '20px', lg: '65px 32px'},
            border: '2px solid var(--blue)',
            borderRadius: '16px',
            minHeight: '116px'
        }}>
            <img className='serviceIcon' src={src} alt={alt}/>
            <Typography variant="h3" sx={{fontSize: {xs: '16px', sm: '24px'}, fontWeight: 500, color: 'var(--black)', lineHeight: 1.3}}>{label}</Typography>
        </Box>
    )
}
