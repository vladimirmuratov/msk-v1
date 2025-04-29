import {Box, Link, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const FinalBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: 'var(--blue)',
                padding: {xs: '10px', sm: '30px'},
                marginY: {xs: '25px', sm: '50px'}
            }}>
            <Typography
                sx={{fontSize: 20, color: 'var(--white)', lineHeight: 1.3, marginBottom: '10px'}}>
                Мы работаем ежедневно и круглосуточно, без выходных и праздников. Вы можете получить консультацию
                специалиста по телефону:&nbsp;
                <Link href={`tel:${phoneNumber}`}
                      sx={{
                          color: 'var(--red)',
                          fontWeight: 500,
                          textWrap: 'nowrap',
                          textDecorationColor: 'var(--red)'
                      }}>{phoneNumber}</Link>
            </Typography>
            <Typography
                sx={{fontSize: 20, color: 'var(--white)', lineHeight: 1.3}}>
                Мы постараемся ответить Вам максимально оперативно!
            </Typography>
        </Box>
    )
}
