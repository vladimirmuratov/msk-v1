import Head from 'next/head';
import { MainPageContent } from '@/content/main-page/MainPageContent';
import { Suspense } from 'react';
import { Metrika } from '@/Metrika';

export default function Home() {
  return (
    <>
      <Head>
        <title>Платная госпитализации в Москве. 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Официальный координатор по госпитализации. 10 лет успешной работы. 20 клиник-партнеров. Оперативность. Минимум документов. Финансовая прозрачность"
        />
        <meta
          name="keywords"
          content="платная госпитализация, гинекология госпитализация, платная палата в хирургии, травматология платная палата, платная госпитализация урология, платный стационар кардиология, платный стационар неврологии,  платная госпитализация в москве гастроэнтерология, больница терапия платная палата"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="bbac592db0eece12" />
        <link rel="canonical" href="https://msk-ambulance.ru/" />
        {/*<link rel="icon" href="/icon.png"/>*/}
        <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
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
