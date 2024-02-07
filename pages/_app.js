import '@/styles/globals.css';
import { ReduxProvider } from '@/redux/Provider';

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
