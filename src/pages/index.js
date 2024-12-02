import Head from 'next/head'
import {MainPageContent} from '@/content/main-page/MainPageContent'
import {Suspense} from 'react'
import {Metrika} from '@/Metrika'


export default function Home() {
    return (
        <>
            <Head>
                <title>МСК платная госпитализация 8 (499) 719-81-00, 24/7</title>
                <meta name="description" content="Срочная платная госпитализация в Москве и области. Мы обеспечиваем качественное лечение тяжелобольных в условиях специализированных медицинских учреждений."/>
                <meta name="keywords" content="платная госпитализация, гинекология госпитализация, платная палата в хирургии, травматология платная палата, платная госпитализация урология, платный стационар кардиология, платный стационар неврологии,  платная госпитализация в москве гастроэнтерология, больница терапия платная палата"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="yandex-verification" content="bbac592db0eece12" />
                <link rel="icon" href="/icon.png"/>
            </Head>
            <main>
                <Suspense>
                    <MainPageContent/>
                    <Metrika/>
                </Suspense>
            </main>
        </>
    )
}
