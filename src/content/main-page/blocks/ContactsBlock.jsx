import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

export const ContactsBlock = () => {
    return (
        <Box
            component="section"
            id='contact'
            sx={{
                scrollMarginTop: '100px',
                padding: {xs: '20px', sm: '0 65px 50px'},
            }}
        >
            <Typography sx={{fontSize: '32px', fontWeight: 500, color: 'var(--black)', marginBottom: '20px'}}>
                Контакты
            </Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'}, gap: {xs: '10px', sm: 0}}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <MapOutlinedIcon sx={{color: 'var(--green)'}}/>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>г. Москва, Мичуринский пр-т д.6</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <LocalPhoneOutlinedIcon sx={{color: 'var(--green)'}}/>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>{phoneNumber}</Typography>
                    </Box>
                </Box>
                <Box>
                    <iframe
                        className='map'
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A604ee8345ca097d664aa1c7764529b62cb0469a88360ead0ce5d5df219788165&amp;source=constructor"
                        frameBorder="0"></iframe>
                </Box>
            </Box>
        </Box>
    )
}
