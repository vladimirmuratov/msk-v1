import Head from 'next/head';
import { MainPageContent } from '@/content/main-page/MainPageContent';
import { Suspense } from 'react';
import { Metrika } from '@/Metrika';

export default function Home() {
    return (
        <>
            <Head>
                <title>Медицинская Сервисная Компания. Срочная платная госпитализация в Москве — помощь без ожидания. 8
                    (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Госпитализация в ведущие столичные клиники в кратчайшие сроки. Помощь при острых и хронических состояниях. Работаем с частными и государственными учреждениями."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, гинекология госпитализация, платная палата в хирургии, травматология платная палата, платная госпитализация урология, платный стационар кардиология, платный стационар неврологии,  платная госпитализация в москве гастроэнтерология, больница терапия платная палата"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
                <link rel="canonical" href="https://msk-group-hospital.ru" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Срочная платная госпитализация в Москве — помощь без ожидания. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация в ведущие столичные клиники в кратчайшие сроки. Помощь при острых и хронических состояниях. Работаем с частными и государственными учреждениями." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-ambulance.ru/" />
                <meta property="og:image" content="https://msk-ambulance.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Срочная платная госпитализация в Москве — помощь без ожидания. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Срочная платная госпитализация в Москве — помощь без ожидания. 8 (499) 719-81-00, 24/7" />
            </Head>
            <main>
                <Suspense>
                    <MainPageContent />
                    <Metrika />
                </Suspense>
            </main>
        </>
    );
}
