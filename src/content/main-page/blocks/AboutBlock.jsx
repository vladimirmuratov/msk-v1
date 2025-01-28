import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: '150px',
                padding: { xs: '18px 20px 20px', sm: '18px 30px 50px' },
                marginTop: { xs: '200px', sm: '0' }
            }}
        >
            <Box>
                <Typography variant="h2"
                            sx={{ fontSize: '32px', fontWeight: 500, color: 'var(--black)', marginBottom: '20px' }}>
                    О нас
                </Typography>
                <Typography sx={{ fontSize: '20px', color: 'var(--gray)' }}>
                    <Box component="span" sx={{ fontWeight: 600, color: 'var(--blue)', }}>МСК-госпитализация</Box> берет
                    на себя ответственность в организации экстренной и плановой госпитализации
                    в передовые медицинские учреждения столицы, гарантируя для своих клиентов оперативный доступ к
                    лучшим практикам и комфорту. Осознавая критическую роль своевременного обращения за профессиональной
                    помощью, мы обеспечиваем персональное сопровождение на протяжении всего пути от первого шага до
                    успешной реабилитации.
                </Typography>
                <Typography sx={{ fontSize: '20px', color: 'var(--gray)', marginTop: '15px' }}>
                    Сотрудничая напрямую с флагманами московского здравоохранения – клиниками,
                    оснащенными новейшими технологиями и привлекающими ведущих специалистов в каждой области медицины –
                    мы стремимся к оптимальному решению всех вопросов госпитализации. Наш приоритет — упростить процесс
                    для пациентов, сократить время ожидания и предоставить безупречную поддержку, обеспечивая
                    спокойствие и уверенность на каждом этапе лечения.
                </Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                marginY: { xs: '15px', sm: '100px' },
                alignItems: 'center',
            }}>
                <Typography
                    variant="h3"
                    sx={{ fontSize: '26px', fontWeight: 500, color: 'var(--black)', lineHeight: 1.5 }}>
                    Мы стремимся обеспечить комфорт и спокойствие наших клиентов, предоставляя только лучшее в области
                    медицинского обслуживания. С нами вы получите качественную помощь без очередей и лишнего стресса.
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <img src="/images/doctors/doctor5-color.jpg" alt="госпитализация с платной скорой"
                         style={{ width: '100%' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};
