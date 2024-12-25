import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box
            sx={{
                scrollMarginTop: '150px',
                padding: { xs: '18px 20px 20px', sm: '18px 30px 50px' },
            }}
        >

            <Typography variant="h2"
                        sx={{ fontSize: '32px', fontWeight: 500, color: 'var(--black)', marginBottom: '20px' }}>
                Почему именно мы?
            </Typography>

            <Typography sx={{ fontSize: '20px', color: 'var(--gray)', marginBottom: '5px' }}>
                Наша компания специализируется на организации госпитализации в Москве и Московской области, обладая
                детальной информацией о ведущих клиниках и лучших специалистах. Мы знаем, где доступны индивидуальные
                палаты, какие стационары предоставляют услуги по вашему медицинскому профилю и как быстро организовать
                госпитализацию в нужное учреждение.
            </Typography>
            <Typography sx={{ fontSize: '20px', color: 'var(--gray)' }}>
                Мы готовы помочь даже в сложных случаях, включая ситуации, когда пациент получил отказ в госпитализации
                в других клиниках. У нас есть опыт работы с пожилыми пациентами, и мы понимаем все особенности их
                госпитализации. Наша команда обеспечивает круглосуточное сопровождение и поддержку семь дней в неделю,
                чтобы каждый пациент чувствовал себя в безопасности и комфорте.
            </Typography>
        </Box>
    );
};
