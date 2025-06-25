import { Head, Html, Main, NextScript } from 'next/document';
import { documentGetInitialProps, DocumentHeadTags } from '@mui/material-nextjs/v14-pagesRouter';

export default function Document(props) {
    return (
        <Html lang="en" prefix="og: https://ogp.me/ns#">
            <Head>
                <DocumentHeadTags {...props} />
                <meta name="yandex-verification" content="bbac592db0eece12" />
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
