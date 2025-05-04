import { Inter } from 'next/font/google';
import { ApolloProviderWrapper } from './providers/apollo-provider';
import { Providers } from './providers';
import { ThemeProvider } from './providers/theme-provider';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Noise SaiGon',
  description:
    'Discover live music events, gigs, and the latest reads about the SaiGon music scene.',
  openGraph: {
    title: 'Noise SaiGon - Live Music in SaiGon',
    description:
      'live.music.SaiGon. Discover live music events, gigs, and the latest reads about the SaiGon music scene.',
    url: 'https://noisesaigon.com',
    siteName: 'Noise SaiGon',
    images: [
      {
        url: 'https://media.graphassets.com/resize=fit:clip,height:600,width:970/Do1dGjAUTWeFv64ZSMpu',
        width: 1200,
        height: 630,
        alt: 'Noise SaiGon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noise SaiGon - Live Music in SaiGon',
    description:
      'live.music.SaiGon. Discover live music events, gigs, and the latest reads about the SaiGon music scene.',
    images: [
      'https://media.graphassets.com/resize=fit:clip,height:600,width:970/Do1dGjAUTWeFv64ZSMpu',
    ],
  },
  keywords:
    'Music, Events, SaiGon, Drums, Festival, Liveshow, Bia, Live, Coffee, Rock, Ho Chi Minh',
  icons: {
    icon: '/favicon.png',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'ZXOKCtk7cQLJjdU_Msk6v7kVMa-LJEZ2PZc4mDw9zsY',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="article:tag" content={metadata.keywords} />
        <meta name="news_keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="noisesaigon"
          data-description="Support me on Buy me a coffee!"
          data-message="Thanks for visiting! You can now buy us a coffee!"
          data-color="#FF5F5F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="76"
        ></script>
      </head>
      <body className={inter.className}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KXQQ6XC7');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXQQ6XC7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ThemeProvider>
          <ApolloProviderWrapper>
            <Providers>{children}</Providers>
          </ApolloProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
