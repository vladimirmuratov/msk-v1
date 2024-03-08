import {Box} from '@mui/material'
import {Banner} from '@/components/Banner'
import {AboutBlock} from '@/content/main-page/blocks/AboutBlock'
import {BannerCardsBlock} from '@/content/main-page/blocks/BannerCardsBlock'
import {GreenBlock} from '@/content/main-page/blocks/GreenBlock'
import {ServiceBlock} from '@/content/main-page/blocks/ServiceBlock'
import {ContactsBlock} from '@/content/main-page/blocks/ContactsBlock'

export const MainPageContent = () => {
    return (
        <Box>
            <Banner/>
            <BannerCardsBlock/>
            <AboutBlock/>
            <GreenBlock/>
            <ServiceBlock/>
            <ContactsBlock/>
        </Box>
    )
}
