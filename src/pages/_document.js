import { Head, Html, Main, NextScript } from 'next/document';
import { documentGetInitialProps, DocumentHeadTags } from '@mui/material-nextjs/v14-pagesRouter';

export default function Document(props) {
    return (
        <Html lang="en" prefix="og: https://ogp.me/ns#">
            <Head>
                <DocumentHeadTags {...props} />
                <title>Все лучшие клиники Москвы в одном месте. Платная госпитализация. 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Госпитализация в ведущие клиники Москвы в кратчайшие сроки. Помощь при острых и хронических состояниях. Работаем с частными и государственными учреждениями. Медицинский туризм."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, гинекология госпитализация, платная палата в хирургии, травматология платная палата, платная госпитализация урология, платный стационар кардиология, платный стационар неврологии,  платная госпитализация в москве гастроэнтерология, больница терапия платная палата"
                />
                <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Все лучшие клиники Москвы в одном месте. Платная госпитализация. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация в ведущие клиники Москвы в кратчайшие сроки. Помощь при острых и хронических состояниях. Работаем с частными и государственными учреждениями. Медицинский туризм." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-ambulance.vercel.app" />
                <meta property="og:image" content="https://msk-ambulance.vercel.app/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Все лучшие клиники Москвы в одном месте. Платная госпитализация. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Все лучшие клиники Москвы в одном месте. Платная госпитализация. 8 (499) 719-81-00, 24/7" />

                <meta name="yandex-verification" content="cafce7596a3a082e" />
                <link rel="canonical" href="https://msk-ambulance.vercel.app" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}

Document.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
};
