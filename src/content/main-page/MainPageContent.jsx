import {Box} from '@mui/material'
import {Banner} from '@/components/Banner'
import {AboutBlock} from '@/content/main-page/blocks/AboutBlock'
import {BannerCardsBlock} from '@/content/main-page/blocks/BannerCardsBlock'
import {GreenBlock} from '@/content/main-page/blocks/GreenBlock'
import {ServiceBlock} from '@/content/main-page/blocks/ServiceBlock'
import {ContactsBlock} from '@/content/main-page/blocks/ContactsBlock'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {FloatBtn} from '@/components/FloatBtn'
import {Modal} from '@/components/Modal'
import {MessageForm} from '@/components/MessageForm'
import DialogContentText from '@mui/material/DialogContentText'
import {timeOut} from '@/config'
import {FinalBlock} from '@/content/main-page/blocks/FinalBlock'

export const MainPageContent = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(false)
    const [open, setOpen] = useState(false)
    const [sendForm, setSendForm] = useState(false)

    useEffect(() => {
        let timeout
        if (sendForm) {
            timeout = setTimeout(() => {
                handleCloseSuccessMessage()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [sendForm])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseSuccessMessage = () => {
        setSendForm(false)
    }

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
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
            <FinalBlock/>
            <ContactsBlock/>
            <FloatBtn handleOpen={handleClickOpen}/>

            <Modal open={open} handleClose={handleClose} title="Связаться с нами">
                <MessageForm handleClose={handleClose} onSendForm={setSendForm}/>
            </Modal>

            {sendForm && (
                <Modal title="Сообщение отправлено!" open={sendForm} handleClose={handleCloseSuccessMessage}>
                    <DialogContentText id="alert-dialog-description">
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </Modal>
            )}
        </Box>
    )
}
