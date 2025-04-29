import { Fab } from '@mui/material';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

export const FloatBtn = ({ handleOpen }) => {
    return (
        <Fab
            onClick={handleOpen}
            color="error"
            sx={{
                backgroundColor: 'var(--red)',
                position: 'fixed',
                bottom: { xs: '10px', sm: '30px', md: '50px' },
                right: { xs: '10px', sm: '30px', md: '50px' }
            }}>
            <PhoneEnabledOutlinedIcon />
            <span className="pulse-button__rings"></span>
            <span className="pulse-button__rings"></span>
            <span className="pulse-button__rings"></span>
        </Fab>
    );
};
