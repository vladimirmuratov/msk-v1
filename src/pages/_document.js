import {Html, Head, Main, NextScript} from 'next/document'
import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter'

export default function Document(props) {
    return (
        <Html lang="en">
            <Head>
                {/*УДАЛИТЬ ПРИ PRODUCTION!!!*/}
                <meta name="robots" content="noindex,nofollow" key="robots"/>
                {/*-----------------------*/}
                <DocumentHeadTags {...props} />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx)
    return finalProps
}
