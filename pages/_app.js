import { AuthProvider } from '../src/lib/auth';

import Header from '../src/components/Header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Header />
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
