import {Box, Typography} from '@mui/material'
import {links, phoneNumber} from '@/config'
import Link from 'next/link'
import {useCallback, useEffect, useRef, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = ({toggleDrawer, router}) => {
    const scrollContainer = useRef(null)
    const [position, setPosition] = useState('relative')
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.screen.width)
    }, [])

    const onScroll = useCallback(() => {
        const {top, bottom} = scrollContainer.current.getBoundingClientRect()
        if (bottom <= 64) {
            setPosition('fixed')
        } else {
            setPosition('relative')
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => {
            window.removeEventListener('scroll', onScroll, {passive: true})
        }
    }, [])

    return (
        <Box ref={scrollContainer} component="header">
            <Box sx={{
                backgroundColor: 'var(--black)',
                padding: {xs: '10px', sm: '10px 65px'},
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'space-between',
                color: 'var(--white)',
            }}>
                <Typography sx={{fontSize: {xs: '12px', sm: '16px'},}}>г. Москва, Мичуринский пр-т, д. 6</Typography>
                <Typography sx={{fontSize: {xs: '12px', sm: '16px'},}}>{phoneNumber}</Typography>
            </Box>
            <Box sx={{
                display: {xs: 'none', sm: 'flex'},
                justifyContent: 'center',
                alignItems: 'center',
                paddingY: '50px'
            }}>
                <img src="/images/logo.png" alt="logo" style={{width: '200px'}}/>
            </Box>
            <Box
                component="nav"
                sx={{
                    position: {position},
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: 'var(--green)',
                    color: 'var(--white)',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '942px',
                    height: '60px',
                    margin: '0 auto',
                }}>
                {(position === 'fixed' || windowWidth < 600) && (
                    <Box onClick={() => router.push('/')} sx={{display: {xs: 'block'}, position: 'absolute', left: 20, cursor: 'pointer'}}>
                        <img src="/images/logo.png" alt="logo" style={{width: '80px'}}/>
                    </Box>
                )}
                <Box sx={{
                    display: {xs: 'none', sm: 'flex'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: {sm: '15px', md: '40px'}
                }}>
                    {links.map((link) => (
                        <Link key={link.id} href={link.path}><Typography>{link.label}</Typography></Link>
                    ))}
                </Box>
                <MenuIcon onClick={toggleDrawer(true)} sx={{display: {xs: 'block', sm: 'none'}, position: 'absolute', right: 20}}/>
            </Box>
        </Box>
    )
}
