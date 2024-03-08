import Head from 'next/head'
import {MainPageContent} from '@/content/main-page/MainPageContent'


export default function Home() {
    return (
        <>
            <Head>
                <title>МСК</title>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <MainPageContent/>
            </main>
        </>
    )
}
