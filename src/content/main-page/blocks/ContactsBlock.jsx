import { Box, Link, Typography } from '@mui/material';
import { email, phoneNumber, phoneNumber2 } from '@/config';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SocialBlock from '@/components/SocialBlock';

export const ContactsBlock = () => {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                scrollMarginTop: '100px',
                padding: { xs: '10px', sm: '50px 30px 100px' },
            }}
        >
            <Typography
                variant="h2"
                sx={{ fontSize: '32px', fontWeight: 500, color: 'var(--red)', marginBottom: '20px' }}
            >
                Контакты
            </Typography>
            <Box
                sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: '10px', sm: 0 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <MapOutlinedIcon sx={{ color: 'var(--blue)' }} />
                        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>г. Москва, Мичуринский пр-т
                            д.6</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <LocalPhoneOutlinedIcon sx={{ color: 'var(--blue)' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <Link
                                href={`tel:${phoneNumber}`}
                                sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                            >
                                {phoneNumber}
                            </Link>
                            <Link
                                href={`tel:${phoneNumber2}`}
                                sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                            >
                                {phoneNumber2}
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <AlternateEmailIcon sx={{ color: 'var(--blue)' }} />
                        <Link href={`mailto:${email}`} sx={{ fontSize: { xs: '14px', sm: '16px' } }}>{email}</Link>
                    </Box>
                    <Box sx={{ paddingLeft: '34px' }}>
                        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>ООО "МСК"</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>ИНН: 9725116009</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>КПП: 772501001</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>ОГРН: 1237700147343</Typography>
                    </Box>
                    <SocialBlock className="banner-social-mobile" />
                </Box>
                <Box>
                    <iframe
                        className="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A604ee8345ca097d664aa1c7764529b62cb0469a88360ead0ce5d5df219788165&amp;source=constructor"
                        frameBorder="0"></iframe>
                </Box>
            </Box>
        </Box>
    );
};
