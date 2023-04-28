import { NavItem } from "@/types/nav"

interface SiteConfig {
	name: string
	description: string
	mainNav: NavItem[]
	links: {
		twitter: string
		github: string
		order: string
	}
}

export const siteConfig: SiteConfig = {
	name: "Restaurant Name",
	description: "Food Restaurant",
	mainNav: [
		{
			title: "Home",
			href: "/",
			active: false,
		},
		{
			title: "About",
			href: "/about-us",
			active: false,
		},
		{
			title: "Contact",
			href: "/contact",
			active: false,
		}
	],
	links: {
		twitter: "https://twitter.com/hestiabyte",
		github: "https://github.com/HestiaByte",
		order: "https://order.hestiabyte.live",
	},
}
