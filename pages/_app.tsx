import { Inter as FontSans } from "@next/font/google"
import type { AppProps } from "next/app"
import "@/styles/globals.css"
import { Layout } from "@/components/layout"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
				<Layout>
					<Component {...pageProps} />
				</Layout>
		</>
	)
}
