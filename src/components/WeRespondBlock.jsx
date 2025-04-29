import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box
            sx={{
                scrollMarginTop: '150px',
                padding: {xs: '18px 10px 20px', sm: '18px 30px 50px'},
            }}
        >

            <Typography variant="h2" sx={{fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px'}}>
                Мы отвечаем за:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--blue)'}}/>
                <Typography variant="h3" sx={{fontSize: 20, fontWeight: 500}}>Оптимальный выбор клиники</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--blue)'}}/>
                <Typography variant="h3" sx={{fontSize: 20, fontWeight: 500}}>Экспертный контроль качества и стоимости
                    лечения</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--blue)'}}/>
                <Typography variant="h3" sx={{fontSize: 20, fontWeight: 500}}>Врачебное сопровождение</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--blue)'}}/>
                <Typography variant="h3" sx={{fontSize: 20, fontWeight: 500}}>Комплексный подход</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--blue)'}}/>
                <Typography variant="h3" sx={{fontSize: 20, fontWeight: 500}}>Юридическую поддержку</Typography>
            </Box>
        </Box>
    )
}
