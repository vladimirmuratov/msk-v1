import {Box} from '@mui/material'
import {Banner} from '@/components/Banner'
import {AboutBlock} from '@/content/main-page/blocks/AboutBlock'
import {BannerCardsBlock} from '@/content/main-page/blocks/BannerCardsBlock'
import {GreenBlock} from '@/content/main-page/blocks/GreenBlock'
import {ServiceBlock} from '@/content/main-page/blocks/ServiceBlock'
import {ContactsBlock} from '@/content/main-page/blocks/ContactsBlock'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export const MainPageContent = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        const os = navigator.userAgentData.platform
        console.log(os)

        if(os === 'Android' || os === 'iOS'){
            setMobile(true)
        }

    }, [])
    return (
        <Box>
            <Banner router={router} isMobile={isMobile}/>
            <BannerCardsBlock/>
            <AboutBlock/>
            <GreenBlock/>
            <ServiceBlock/>
            <ContactsBlock/>
        </Box>
    )
}
