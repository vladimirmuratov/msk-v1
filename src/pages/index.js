import Head from 'next/head'
import {MainPageContent} from '@/content/main-page/MainPageContent'
import {Suspense} from 'react'
import {Metrika} from '@/Metrika'


export default function Home() {
    return (
        <>
            <Head>
                <title>МСК</title>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
