import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {links} from '@/config'

export const TemporaryDrawer = ({anchor, toggleDrawer, isOpen, router}) => {

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {links.map(({id, label, path, Icon}) => (
                    <ListItem key={id} disablePadding>
                        <ListItemButton onClick={() => router.push(path)}>
                            <ListItemIcon>
                                <Icon sx={{color: 'var(--blue)'}}/>
                            </ListItemIcon>
                            <ListItemText primary={label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Drawer
            anchor={anchor}
            open={isOpen}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    )
}
