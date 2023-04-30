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
			href: "/#home",
			active: true,
		},
		{
			title: "Our Brands",
			href: "/#brands",
			active: false,
		},
		{
			title: "About Us",
			href: "/#about-us",
			active: false,
		},
		{
			title: "Contact Us",
			href: "/#contact",
			active: false,
		}
	],
	links: {
		twitter: "https://twitter.com/hestiabyte",
		github: "https://github.com/HestiaByte",
		order: "https://order.hestiabyte.live",
	},
}
