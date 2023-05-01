import { MainNav } from "@/components/main-nav"
import { siteConfig } from "@/config/site"
import Link from "next/link"
export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 w-full bg-white text-lg text-slate-800" >
			<div className="container flex h-20 items-center">
				<div className="hidden container md:flex">
					<Link href="/" className="hidden items-center space-x-2 md:flex">
						<img src="/logo.png" alt="Logo" className="h-14 w-14" />
						<span className="hidden font-bold md:inline-block w-">
							<span className="text-red-700">TURKISH</span>  KEBABS
						</span>
					</Link>
				</div>
				<div className="container flex items-center space-x-4 md:justify-end md:space-x-0  ">
					<MainNav items={siteConfig.mainNav}/>
				</div>
			</div>
		</header>
	)
}
