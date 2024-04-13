import {Box, Typography} from '@mui/material'

export const WhyWeBlock = () => {
    return (
        <Box
            sx={{
                scrollMarginTop: '150px',
                padding: {xs: '18px 20px 20px', sm: '18px 65px 50px'},
                marginTop: {xs: '200px', sm: '0'}
            }}
        >

            <Typography variant="h4" sx={{fontSize: '32px', fontWeight: 500, color: 'var(--black)', marginBottom: '20px'}}>
                Почему именно мы?
            </Typography>

            <Typography sx={{fontSize: '20px', color: 'var(--green)'}}>
                Наша компания оказывает помощь в госпитализации в Москве и Московской области и знает всё о ведущих
                клиниках и врачах. Нам прекрасно известно, сколько стоит отдельная палата в больнице. Какие стационары
                оказывают услуги именно по вашему профилю и как госпитализироваться в нужную больницу.
            </Typography>
            <Typography sx={{fontSize: '20px', color: 'var(--green)'}}>
                Мы готовы прийти на помощь даже если больному поступил отказ в госпитализации в другие клиники. Нам
                прекрасно известно, какие особенности имеет госпитализация пожилых пациентов — и мы готовы сопровождать
                их круглые сутки семь дней в неделю.
            </Typography>
        </Box>
    )
}
