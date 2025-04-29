import '@/styles/globals.css';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 0);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {visible && (
                <AppCacheProvider {...pageProps}>
                    <ThemeProvider theme={theme}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </AppCacheProvider>
            )}
        </>
    );
}
