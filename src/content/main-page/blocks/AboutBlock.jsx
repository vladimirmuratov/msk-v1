import {Box, Typography} from '@mui/material'

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id='about'
            sx={{
                scrollMarginTop: '150px',
                padding: {xs: '18px 20px 20px', sm: '18px 65px 50px'},
                marginTop: {xs: '200px', sm: '0'}
            }}
        >
            <Box>
                <Typography sx={{fontSize: '32px', fontWeight: 500, color: 'var(--black)', marginBottom: '20px'}}>
                    О нас
                </Typography>
                <Typography sx={{fontSize: '20px', color: 'var(--green)'}}>
                    Московская Сервисная Компания (МСК) уже 10 лет оказывает услуги платной госпитализации и
                    транспортировки
                    пациентов в ведущие клиники Москвы в круглосуточном режиме.
                </Typography>
                <Typography sx={{fontSize: '20px', color: 'var(--green)', marginTop: '15px'}}>
                    Наша компания работает на базе ФГБУ "Объединенная больница с поликлиникой" Управления Делами Президента РФ.
                </Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'},
                marginY: {xs: '15px', sm: '100px'},
                position: 'relative'
            }}>
                <Typography sx={{fontSize: '20px', color: 'var(--green)'}}>
                    Госпитализация больного — важнейший момент жизни, во время которого нужно принимать быстрые
                    и безошибочные решения.
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <img src="/images/doctors/doctor3.png" alt="pic"
                         style={{height: '150px', position: 'absolute', right: '3%', top: '70px'}}/>
                    <img src="/images/doctors/doctor2.png" alt="pic"
                         style={{height: '150px', position: 'absolute', right: '5%', top: '-70px'}}/>
                    <img src="/images/doctors/doctor1.png" alt="pic"
                         style={{height: '150px', position: 'absolute', right: '15%', top: '-20px'}}/>
                </Box>
            </Box>
        </Box>
    )
}
