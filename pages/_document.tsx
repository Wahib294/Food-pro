import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en" className='scroll-smooth' >
			<Head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Playfair+Display:wght@900&display=swap" rel="stylesheet"/>
			</Head>
			<title>Turkish Kebabs</title>
			<body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
