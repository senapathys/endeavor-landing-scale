import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </main>
  )
}
