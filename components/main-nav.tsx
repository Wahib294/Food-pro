import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"
import Link from "next/link"
import * as React from "react"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface MainNavProps {
	items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
	const router = useRouter();
	const [nav, setNav] = useState(items);
	useEffect(() => {
    const updatedNav = nav.map((item) => ({
      ...item,
      active: item.href === router.pathname
    }));
    setNav(updatedNav);
  }, [router.pathname]);
	return (
		<div className="flex gap-6 md:gap-10">
			{nav?.length ? (
				<nav className="hidden gap-10  md:flex">
					{nav?.map(
						(item, index) =>
							item.href && (
									<span className= {cn(
										"flex items-center",
										item.active && "bg-gradient-to-r from-red-400 to-red-800 bg-clip-text text-transparent")}
									>
								<Link
									key={index}
									href={item.href}
									className= {cn("sm:text-lg hover:text-red-700 transition-colors duration-700",
									item.active && "font-exxtrabold",
									!item.active && "font-extrabold",
									item.disabled && "cursor-not-allowed opacity-80",
							)}
									>
									{item.title}
								</Link>
								</span>
							),
					)}
				</nav>
			) : null}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
					>
						<img src="./logo.png" width={30} height={10} alt=""className="-ml-4 mr-2" />
						<span className="font-bold text-slate-800"> Menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="start"
					sideOffset={24}
					className="w-[300px] overflow-scroll"
				>
					<DropdownMenuLabel>
						<Link href="/" className="flex items-center">
							<img src="./logo.png"  alt=""className="mr-1 h-4 w-4" /><p> <span className="text-red-700"> TURKISH  </span> KEBABS</p>
						</Link>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{nav?.map(
						(item, index) =>
							item.href && (
								<DropdownMenuItem key={index} asChild>
									<Link href={item.href}
									className=  {cn(item.active && "text-red-700 font-extrabold",
							)}
									>{item.title}</Link>
								</DropdownMenuItem>
							),
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
