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
                    Конечно, мы работаем только по-честному — всё официально и прозрачно. Когда оформляем
                    госпитализацию, всегда заключаем договор и выдаём чеки — никаких "на честном слове". У нас партнёры
                    — исключительно клиники с лицензией, причём это московские учреждения, которым действительно можно
                    доверять. В общем, ни тени сомнений: документы будут в порядке, а лечение — строго по закону.
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
                    Мы не устраиваем ценовых сюрпризов. Всё, что вы увидите в договоре — окончательно и бесповоротно. Вы
                    получаете чёткое понимание суммы: никаких "доплат потом", никаких неопределённых пунктов мелким
                    шрифтом. Мы сами терпеть не можем истории про внезапные счета "за дополнительные услуги" — поэтому у
                    нас таких ситуаций просто не возникает.
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
                    Конечно, мы работаем с самыми разными медучреждениями Москвы — как государственными, так и частными,
                    включая федеральные и профильные ведомственные клиники. Здесь речь не о формальном списке
                    сотрудничеств, а о реальной возможности подобрать для человека ту клинику, которая точно подходит
                    под его диагноз и бюджет. У кого-то приоритет — ведущие государственные центры, кто-то предпочитает
                    атмосферу частной медицины. Мы всегда исходим из того, что удобно и важно именно вам: помочь найти
                    врача нужной специализации, согласовать стоимость лечения или просто учесть личные пожелания (иногда
                    важны даже мелочи — например, расположение клиники или возможность записаться к конкретному
                    специалисту).
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
                    Мы берём на себя заботу о госпитализации, даже если у вас нет полиса ОМС — всё официально, с полным
                    сопровождением на каждом этапе. Приехали из другого города или даже из страны СНГ? Для нас это не
                    проблема. Всю бумажную волокиту, вопросы с документами, оформление — закрываем под ключ. Вы
                    приезжаете и спокойно занимаетесь своим здоровьем, остальное уже наша забота.
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
                    Конечно! У нас своя команда медиков и собственные санитарные машины — все под рукой, не надо ждать
                    подрядчиков. Берёмся за самые разные случаи: если нужно срочно перевезти человека из дома, из
                    больницы или из другого города, организуем всё максимально быстро и бережно. Здесь важна каждая
                    деталь — от подготовленного персонала до аккуратной транспортировки. В общем, делаем так, чтобы
                    родственникам не пришлось переживать ни о процессах, ни о безопасности.
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
                    Мы работаем только с теми клиниками, где есть всё необходимое для самых непредсказуемых случаев — и
                    реанимация, и полноценные отделения интенсивной терапии. Скажем, если что-то случается внезапно (те
                    самые ситуации "не дай бог"), пациента готовы принять незамедлительно: никакой волокиты, прямая
                    госпитализация. А дальше — круглосуточное наблюдение и поддержка врачей. Это не просто слова: наши
                    пациенты действительно могут остаться под присмотром столько, сколько нужно, чтобы пережить самые
                    сложные моменты безопасно и спокойно.
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
                    Да, мы действительно помогаем с переводом пациентов между столичными клиниками — причём это касается
                    и переезда из других городов, и случаев, когда человек находится в частной медицине. Делается всё
                    «по-честному» — официально, без серых схем и лишней волокиты. По времени это не превращается в
                    бесконечную эпопею: организуем всё максимально быстро, чтобы пациент не ждал неделю в подвешенном
                    состоянии.
                </Typography>
            </Box>

        </Box>
    );
};
