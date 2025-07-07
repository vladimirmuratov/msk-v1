import Head from 'next/head';
import { MainPageContent } from '@/content/main-page/MainPageContent';
import { Suspense } from 'react';
import { Metrika } from '@/Metrika';

export default function Home() {
    return (
        <>
            <Head>
                <title>Медицинская Сервисная Компания. Платная госпитализация. Клиники управления делами Президента РФ. 8 (499) 719-81-00, 24/7</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
