import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`small:px-5 md:px-24 py-0 min-h-screen font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
