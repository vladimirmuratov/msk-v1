import {Box, Typography} from '@mui/material'
import {serviceBlockItems} from '@/config'
import {BaseServiceBlockCard} from '@/components/base/BaseServiceBlockCard'

export const ServiceBlock = () => {
    return (
        <Box
            component="section"
            id="service"
            sx={{
                scrollMarginTop: '100px',
                padding: {xs: '18px 10px 20px', sm: '50px 30px 50px'},
            }}
        >
            <Typography
                variant="h2"
                sx={{fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px', lineHeight: 1.3}}>
                Что мы предлагаем
            </Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'}, gap: {xs: '16px', sm: '32px'}}}>
                {serviceBlockItems.map((item) => (
                    <BaseServiceBlockCard key={item.id} {...item}/>
                ))}
            </Box>
        </Box>
    )
}
