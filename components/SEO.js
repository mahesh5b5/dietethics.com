import Head from "next/head";
import { useRouter } from "next/router";
import siteMeta from "../data/site-meta.json";

function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return `${siteMeta.siteUrl}${siteMeta.defaultImage}`;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${siteMeta.siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export default function SEO({
  title,
  description,
  path,
  image,
  keywords,
  type = "website",
  noindex = false,
  structuredData,
}) {
  const router = useRouter();
  const cleanPath = (path || router.asPath || "/").split("?")[0];
  const canonical = `${siteMeta.siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
  const fullTitle = title ? `${title} | ${siteMeta.siteName}` : siteMeta.defaultTitle;
  const metaDescription = description || siteMeta.defaultDescription;
  const metaImage = toAbsoluteUrl(image || siteMeta.defaultImage);
  const jsonLdBlocks = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={siteMeta.siteName} />
      <meta name="publisher" content={siteMeta.siteName} />
      <meta name="application-name" content={siteMeta.siteName} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow,max-snippet:-1,max-image-preview:none,max-video-preview:-1"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? "noindex,nofollow,max-snippet:-1,max-image-preview:none,max-video-preview:-1"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />
      <meta name="keywords" content={keywords || siteMeta.defaultKeywords} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en-IN" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteMeta.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content={String(siteMeta.defaultOgImageWidth || 1200)} />
      <meta property="og:image:height" content={String(siteMeta.defaultOgImageHeight || 630)} />
      <meta property="og:locale" content={siteMeta.language} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content={siteMeta.twitterHandle} />
      {siteMeta.twitterHandle ? <meta name="twitter:creator" content={siteMeta.twitterHandle} /> : null}

      {jsonLdBlocks.map((entry, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Head>
  );
}
