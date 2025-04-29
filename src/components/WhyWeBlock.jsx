import { Box, Typography } from '@mui/material';
import { FaHandshake, FaHeadset, FaMoneyCheckDollar, FaRegClock, FaUserDoctor } from 'react-icons/fa6';

export const WhyWeBlock = () => {
    return (
        <Box
            sx={{
                scrollMarginTop: '150px',
                padding: { xs: '18px 10px 20px', sm: '18px 30px 50px' },
            }}
        >

            <Typography variant="h2"
                        sx={{ fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px' }}>
                Почему стоит воспользоваться нашим сервисом для подбора медицинской клиники?
            </Typography>


            <Typography
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: 'var(--blue)',
                    marginBottom: { xs: '10px', sm: '20px' }
                }}
            >
                Выбор подходящего медицинского учреждения – ключевой момент на пути к восстановлению здоровья. Мы берем
                на себя всю рутину и помогаем вам найти наилучший вариант, учитывая ваши индивидуальные требования и
                ожидания.
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaRegClock color="var(--red)" size={24} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Экономия ваших сил
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Больше не нужно тратить время на длительные поиски и анализировать неоднозначные отзывы. Мы подберем
                    для вас надежные клиники и квалифицированных врачей — оперативно, точно и без лишних хлопот.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaUserDoctor color="var(--red)" size={24} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Персонализированный подход
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Наши консультанты принимают во внимание все нюансы: поставленный диагноз, наличие сопутствующих
                    проблем со здоровьем, ваши личные предпочтения и даже удобство расположения медицинского центра.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaHeadset color="var(--red)" size={24} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Постоянная поддержка
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы оказываем помощь на каждом этапе: от первой консультации до записи на прием. Поможем с
                    оформлением документов, расскажем о процессе лечения и ответим на любые ваши вопросы.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaMoneyCheckDollar color="var(--red)" size={24} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Открытость и разумные цены
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы сотрудничаем с клиниками, предлагающими обоснованную ценовую политику, и заранее информируем о
                    возможных дополнительных затратах. Полностью исключены скрытые платежи.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaHandshake color="var(--red)" size={24} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Гарантия качества
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы сотрудничаем только с лицензированными и проверенными медицинскими организациями. Забота о вашем
                    здоровье – наш главный приоритет.
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
