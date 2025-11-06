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
                    Забудьте о бесконечных поисках и сомнительных отзывах, которые только запутывают. Мы берем этот
                    головняк на себя — поможем вам быстро найти проверенные клиники и действительно толковых врачей. Всё
                    просто: рассказываете, что нужно — а дальше уже мы. Без лишней беготни и мучительного выбора из
                    сотни похожих вариантов.
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
                    Вы знаете, когда мы беремся за ваш случай, мы смотрим на картину целиком, а не только на диагноз в
                    карточке. Нас волнует не только то, что написано в заключении врача, но и детали — например, есть ли
                    у вас хронические заболевания или какие-то ограничения? А может быть, вы уже точно знаете, что не
                    хотите определённый вид лечения или у вас есть личные предпочтения по врачам? Всё это для нас важно.
                    Иногда даже месторасположение клиники играет роль: кому охота тратить час на дорогу, если можно
                    подобрать отличного специалиста в соседнем районе? Вот почему наши рекомендации всегда собираются
                    под вас — почти как индивидуальный рецепт.
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
                    Каждый шаг — не просто пункт в чек-листе для нас. С того момента, как вы обратились, мы рядом:
                    спокойно объясняем нюансы, разбираемся с бумагами (эти пресловутые справки и направления — да, мы
                    берем их на себя), подсказываем, что вас ждет, чтобы ни одна деталь не осталась в тени. Запись на
                    прием? Не придется часами выяснять, куда звонить — мы сделаем все вместе. Если появятся вопросы —
                    даже если они покажутся вам “глупыми” или слишком простыми — спрашивайте. Здесь нет мелочей, когда
                    речь идет о вашем спокойствии и здоровье.
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
                    Мы сотрудничаем только с теми клиниками, где ценообразование — это не лотерея, а прозрачный и
                    понятный процесс. Еще до начала лечения вы узнаете обо всех возможных расходах — никаких неприятных
                    "сюрпризов" в виде неожиданных доплат или скрытых услуг. Цена озвучивается сразу, и если нужен
                    какой-то дополнительный анализ или процедура, мы обязательно сообщим об этом заранее. Хотелось бы,
                    чтобы такой подход стал стандартом для всей отрасли, потому что доверие начинается именно с
                    честности в мелочах.
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
                    Мы выбираем только тех партнеров, чью надежность и профессионализм можно подтвердить документально –
                    работаем исключительно с официально лицензированными клиниками и медицинскими организациями, которым
                    действительно можно доверять. Для нас это не просто формальность — ведь здоровье каждого клиента для
                    нас куда важнее любой проверки. В итоге, вы можете быть уверены: позаботиться о вас будут те
                    специалисты, за которых мы ручаемся как за себя.
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
