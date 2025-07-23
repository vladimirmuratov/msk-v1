import { Box, Typography } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const FearBlock = () => {
    return (
        <Box
            sx={{
                scrollMarginTop: '150px',
                padding: { xs: '18px 10px 20px', sm: '18px 30px 50px' },
            }}
        >

            <Typography variant="h2"
                        sx={{ fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px' }}>
                Сомневаетесь? Вот почему нам доверяют
            </Typography>


            <Typography
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: 'var(--blue)',
                    marginBottom: { xs: '10px', sm: '20px' }
                }}
            >
                Организация госпитализации — серьёзный шаг. Мы понимаем, как много страхов и вопросов возникает у наших
                клиентов. Ниже — честные ответы на самые распространённые опасения.
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Платная госпитализация — это законно?
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Да, мы работаем официально. Все госпитализации оформляются с заключением договора и чеков.
                    Сотрудничаем только с лицензированными клиниками Москвы.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        “Не накрутят ли стоимость?”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Нет. Все цены — прозрачны и фиксируются в договоре. Вы заранее знаете, за что платите. Никаких
                    “доплат по ходу”.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        “Мне подберут нужную клинику?”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Да. Мы сотрудничаем с государственными, частными, федеральными и ведомственными медучреждениями
                    Москвы. Подбираем клинику под ваш диагноз, бюджет и пожелания.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        “У меня нет ОМС. Это проблема?”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Нет. Мы организуем госпитализацию без полиса ОМС, с полным сопровождением и официальным оформлением.
                    Даже если вы приехали из региона или СНГ.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        “Сможете ли быстро доставить пациента?”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Да. У нас есть собственный санитарный транспорт и медперсонал. Организуем срочную перевозку из дома,
                    больницы, другого города. Всё безопасно и быстро.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        “Если человеку станет хуже?”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы сотрудничаем с клиниками, где есть реанимации и палаты интенсивной терапии. В экстренной ситуации
                    — моментальная госпитализация, круглосуточное наблюдение и медицинская помощь.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpOutlineOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        “Можно ли перевестись из одной больницы в другую?”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Да. Мы организуем перевод пациента между клиниками Москвы, в том числе — из регионов и частных
                    медцентров. Всё решаем официально и быстро.
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: 22, sm: 24 },
                        color: 'var(--red)',
                        paddingTop: { xs: '10px', sm: '20px' },
                        textAlign: 'center',
                        fontStyle: 'italic',
                        textWrap: 'balance',
                        lineHeight: 1.5
                    }}
                >
                    Мы подбираем клинику и специалиста с учетом конкретного запроса, обеспечивая быструю госпитализацию
                    и оптимальные условия лечения в ведущих медицинских центрах Москвы.
                </Typography>
            </Box>

        </Box>
    );
};
