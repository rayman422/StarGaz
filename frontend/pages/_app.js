import { BitcoinProvider } from '../contexts/BitcoinContext';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <BitcoinProvider>
      <Toaster />
      <Component {...pageProps} />
    </BitcoinProvider>
  );
}

export default MyApp;