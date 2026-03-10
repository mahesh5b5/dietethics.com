import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from "next/head"
import siteMeta from "../data/site-meta.json"
import siteConfig from "../data/site-config.json"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteMeta.siteUrl}/#organization`,
      name: siteMeta.siteName,
      url: siteMeta.siteUrl,
      logo: `${siteMeta.siteUrl}/assets/dietethics-logo.png`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.contact.supportEmail,
          telephone: siteConfig.contact.phoneE164,
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"]
        }
      ],
      sameAs: [siteConfig.social.instagramUrl, siteConfig.social.facebookUrl]
    },
    {
      "@type": "WebSite",
      "@id": `${siteMeta.siteUrl}/#website`,
      url: siteMeta.siteUrl,
      name: siteMeta.siteName,
      publisher: { "@id": `${siteMeta.siteUrl}/#organization` },
      inLanguage: "en-IN"
    },
    {
      "@type": "Store",
      "@id": `${siteMeta.siteUrl}/#store`,
      name: `${siteMeta.siteName} Store`,
      image: `${siteMeta.siteUrl}${siteMeta.defaultImage}`,
      telephone: siteConfig.contact.phoneE164,
      email: siteConfig.contact.supportEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sanath Nagar",
        addressRegion: "Hyderabad",
        addressCountry: "IN"
      },
      areaServed: "IN",
      description: "Premium dry fruits, nuts, seeds, and healthy snack products."
    }
  ]
}

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#973131" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  )
}
