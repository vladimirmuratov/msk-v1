import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: '150px',
                padding: { xs: '18px 10px 20px', sm: '18px 30px 50px' },
                marginTop: { xs: '200px', sm: '0' }
            }}
        >
            <Box>
                <Typography variant="h2"
                            sx={{ fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px' }}>
                    О нас
                </Typography>
                <Typography sx={{ fontSize: '20px', color: 'var(--gray)' }}>
                    Здесь, в <Box component="span" sx={{ fontWeight: 500, color: 'var(--blue)', }}>Медицинской Сервисной
                    Компании (МСК)</Box>, мы буквально держим ситуацию за руку — с того самого
                    момента, когда человек решает: «Мне нужна помощь», и до момента, когда он возвращается к привычной
                    жизни после лечения. Для нас дело не только в быстрой организации экстренной или плановой
                    госпитализации. Это история про личное сопровождение и про то ощущение, когда не остаешься один на
                    один со сложностями большой медицины.
                </Typography>
                <Typography sx={{ fontSize: '20px', color: 'var(--gray)', marginTop: '15px' }}>
                    Мы сотрудничаем напрямую с топовыми московскими клиниками — именно там сегодня сосредоточены лучшие
                    специалисты и самая современная техника. Уже несколько раз слышали – от пациентов и их близких – что
                    иначе бы просто потерялись: диагностические кабинеты, бесконечные очереди, согласования… А через нас
                    путь выходит короче, спокойнее и понятнее — вплоть до индивидуальных вопросов реабилитации.
                </Typography>
                <Typography sx={{ fontSize: '20px', color: 'var(--gray)', marginTop: '15px' }}>
                    Наша задача проста — чтобы человек мог максимально сосредоточиться на выздоровлении, а все прочее
                    взяли на себя мы. Будь то срочная госпитализация или долгожданная плановая операция — мы
                    предотвращаем лишние ожидания, обеспечиваем связку между доктором и пациентом (и даже помогаем с
                    направлением на консультацию в нужный кабинет). В общем, заботимся не только о результате, но и обо
                    всем антураже процесса — спокойствие, ясность и поддержка стали нашей рабочей средой.
                </Typography>
            </Box>
            <Box sx={{
                // backgroundColor: 'var(--blue)',
                display: { xs: 'flex', md: 'grid' },
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                marginY: { xs: '15px', sm: '100px' },
                alignItems: 'center',
            }}>
                <Box sx={{
                    backgroundColor: 'var(--blue)',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '30px',
                    width: '100%',
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 500,
                            color: 'var(--white)',
                            backgroundColor: 'var(--blue)',
                            lineHeight: 1.5
                        }}>
                        Мы стремимся обеспечить комфорт и спокойствие наших клиентов, предоставляя только лучшее в
                        области
                        медицинского обслуживания. С нами вы получите качественную помощь без очередей и лишнего
                        стресса.
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img src="/images/doctors/doctor5-color.jpg" alt="госпитализация с платной скорой"
                         style={{ width: '100%' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};
