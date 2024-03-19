import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Box} from '@mui/material'
import {TemporaryDrawer} from '@/components/TemporaryDrawer'
import {useState} from 'react'
import {useRouter} from 'next/router'

export const Layout = ({children}) => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)
    const anchor = 'right'

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'Escape' && (event.key === 'Tab')) {
            setOpen(false)
        }
        setOpen(open)
    }

    return (
        <Box className="container">
            <TemporaryDrawer anchor={anchor} toggleDrawer={toggleDrawer} isOpen={isOpen} router={router}/>
            <Header toggleDrawer={toggleDrawer} router={router}/>
            {children}
            <Footer/>
        </Box>
    )
}
