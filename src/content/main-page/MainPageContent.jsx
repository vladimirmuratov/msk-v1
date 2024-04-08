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
import {BaseModal} from '@/components/base/BaseModal'
import {MessageForm} from '@/components/MessageForm'
import DialogContentText from '@mui/material/DialogContentText'
import {timeOut} from '@/config'
import {FinalBlock} from '@/content/main-page/blocks/FinalBlock'

export const MainPageContent = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(false)
    const [isOpenForm, setOpenForm] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
            setMobile(true)
        }

    }, [])

    useEffect(() => {
        let timeout

        if (success || failed) {
            timeout = setTimeout(() => {
                handleCloseAnswerMessage()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [success, failed])

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    const handleCloseForm = () => {
        setOpenForm(false)
    }

    const handleCloseAnswerMessage = () => {
        setSuccess(false)
        setFailed(false)
    }

    return (
        <Box>
            <Banner router={router} isMobile={isMobile}/>
            <BannerCardsBlock/>
            <AboutBlock/>
            <GreenBlock/>
            <ServiceBlock/>
            <FinalBlock/>
            <ContactsBlock/>
            <FloatBtn handleOpen={handleOpenForm}/>

            <BaseModal open={isOpenForm} handleClose={handleCloseForm} title="Связаться с нами">
                <MessageForm handleClose={handleCloseForm} onSuccess={setSuccess} onFailed={setFailed}/>
            </BaseModal>

            {success && (
                <BaseModal title="Сообщение отправлено!" open={success} handleClose={handleCloseAnswerMessage}
                           color="var(--green)">
                    <DialogContentText id="alert-dialog-description">
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {failed && (
                <BaseModal title="Ошибка сервера!" open={failed} handleClose={handleCloseAnswerMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description">
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}
        </Box>
    )
}
