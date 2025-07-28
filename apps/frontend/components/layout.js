import Head from "next/head";
import Script from "next/script";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import styles from "./layout.module.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router.js";

const pages = {
  "/": "Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS - tesKoran.id",
  "/leaderboard":
    "Leaderboard - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/about":
    "About - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/login":
    "Login - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/profile":
    "Profile - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/contact":
    "Contact Us - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/terms":
    "Terms of Service - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/privacy":
    "Privacy Policy - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/activation":
    "Email Verification - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
  "/password-reset":
    "Reset Password - Latihan Tes Pauli & Kraepelin Online | Persiapan Psikotes Kerja, BUMN, CPNS",
};

const pageDescriptions = {
  "/": "Platform latihan tes Pauli & Kraepelin online terbaik untuk persiapan psikotes kerja, BUMN, CPNS. Tingkatkan kecepatan berhitung, akurasi, dan konsentrasi Anda.",
  "/leaderboard":
    "Lihat peringkat Anda di leaderboard tes Pauli & Kraepelin online tesKoran.id. Bandingkan hasil dengan pengguna lain!",
  "/about":
    "Pelajari lebih lanjut tentang tesKoran.id, platform latihan tes Pauli & Kraepelin online untuk persiapan psikotes dan pengembangan diri.",
  "/login":
    "Masuk ke akun tesKoran.id Anda untuk memulai latihan tes Pauli & Kraepelin, atau daftar sekarang.",
  "/profile":
    "Kelola profil dan lihat riwayat serta statistik tes Pauli & Kraepelin Anda di tesKoran.id.",
  "/contact":
    "Hubungi kami untuk pertanyaan atau bantuan terkait latihan tes Pauli & Kraepelin di tesKoran.id.",
  "/terms":
    "Baca Syarat & Ketentuan penggunaan platform latihan tes Pauli & Kraepelin online tesKoran.id.",
  "/privacy":
    "Pahami Kebijakan Privasi kami mengenai data pengguna di platform latihan tes Pauli & Kraepelin online tesKoran.id.",
  "/activation":
    "Lakukan verifikasi email untuk mengaktifkan akun tesKoran.id Anda dan mulai latihan tes Pauli & Kraepelin.",
  "/password-reset":
    "Reset kata sandi akun tesKoran.id Anda untuk melanjutkan latihan tes Pauli & Kraepelin online.",
};

const noindexPages = [
  "/leaderboard",
  "/activation",
  "/password-reset",
  "/login",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "tesKoran.id",
  url: "https://teskoran.id/",
  logo: "https://teskoran.id/favicon.ico",
  description:
    "Platform latihan tes Pauli & Kraepelin online terbaik untuk persiapan psikotes kerja.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@teskoran.id",
    contactType: "customer service",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "tesKoran.id",
  url: "https://teskoran.id/",
};

export default function Layout({ children, hide, titleClickHandler }) {
  const router = useRouter();
  const title =
    router.pathname in pages
      ? pages[router.pathname]
      : "Halaman Tidak Ditemukan - tesKoran.id";
  const description =
    router.pathname in pageDescriptions
      ? pageDescriptions[router.pathname]
      : "Tempat kamu latihan tes koran gratis. Daftar dan simpan hasil tes kamu!";

  const noindex = noindexPages.includes(router.pathname);

  return (
    <div className={styles.container}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <Head>
        <title>{title}</title>
        {noindex && <meta name="robots" content="noindex" />}

        {/* PWA metadata */}
        <meta name="application-name" content="tesKoran.id" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="tesKoran.id" />

        {/* Desc */}
        <meta name="description" content={description} />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.ico" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://teskoran.id" />
        <meta name="twitter:title" content="tesKoran.id" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="tesKoran.id" />
        <meta
          name="description"
          content="Tempat kamu latihan tes koran gratis. Daftar dan simpan hasil tes kamu!"
        />
        <meta property="og:site_name" content="tesKoran.id" />
        <meta property="og:url" content="https://teskoran.id" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <ToastContainer />
      <main className={styles.main}>
        <Navbar {...{ hide, titleClickHandler }} />
        {children}
        <Footer {...{ hide }} />
      </main>
    </div>
  );
}
