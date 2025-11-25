import Head from 'next/head';
import { MainPageContent } from '@/content/main-page/MainPageContent';
import { Suspense } from 'react';
import { Metrika } from '@/Metrika';

export default function Home() {
    return (
        <>
            <Head>
                <title>Все лучшие клиники Москвы в одном месте. Платная госпитализация. 8 (499) 719-81-00, 24/7</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*<script type="text/javascript">window._ab_id_=160560</script>*/}
                {/*<script src="https://cdn.botfaqtor.ru/one.js"></script>*/}
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
