import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box
            sx={{
                scrollMarginTop: '150px',
                padding: {xs: '18px 20px 20px', sm: '18px 65px 50px'},
                marginTop: {xs: '200px', sm: '0'}
            }}
        >

            <Typography variant="h4" sx={{fontSize: '32px', fontWeight: 500, color: 'var(--black)', marginBottom: '20px'}}>
                Мы отвечаем за:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Оптимальный выбор клиники</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Экспертный контроль качества и стоимости
                    лечения</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Врачебное сопровождение</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Комплексный подход</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Юридическую поддержку</Typography>
            </Box>
        </Box>
    )
}
