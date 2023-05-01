import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
	var active;
	var flags = new Array(4).fill(false);
	flags[0] = true;
useEffect(() => {
    function handleScroll() {
		const brandEl = document.getElementById("brand2");
		const homeEl = document.getElementById("home");
		const contactEl = document.getElementById("contact");
		const aboutEl = document.getElementById("about");
		const brandRect = brandEl.getBoundingClientRect();
		const homeRect = homeEl.getBoundingClientRect();
		const contactRect = contactEl.getBoundingClientRect();
		const aboutRect = aboutEl.getBoundingClientRect();
	  if (homeRect.bottom >= 100 && homeRect.top <= 100) {
		  if (flags[1] === true) {
			  return;
			}
			flags[1] = true;
			flags[0] = false;
			flags[2] = false;
			flags[3] = false;
			active = "/#home";
			console.log("home");
				  const updatedNav = nav.map((item) => ({
		...item,
		active: item.href === active
    }));
    setNav(updatedNav);
		} 
		if (brandRect.top <= 250 && brandRect.bottom >= 0) {
				  if (flags[0] === true) {
						  return;
				  }
				  flags[0] = true;
				  flags[1] = false;
				  flags[2] = false;
				  flags[3] = false;
				  active = "/#brands";
				  	  const updatedNav = nav.map((item) => ({
		...item,
		active: item.href === active
    }));
    setNav(updatedNav);
			} 
			if (aboutRect.top <= 250  && aboutRect.bottom >= 0) {
			if (flags[3] === true) {
				    return;
			}
			flags[3] = true;
			flags[0] = false;
			flags[1] = false;
			flags[2] = false;
			active = "/#about-us";
				  const updatedNav = nav.map((item) => ({
		...item,
		active: item.href === active
    }));
    setNav(updatedNav);
	  } 
	  if (contactRect.top <= 0 && contactRect.bottom >= 0) {
			if (flags[2] === true) {
				    return;
			}
			flags[2] = true;
			flags[0] = false;
			flags[1] = false;
			flags[3] = false;
			active = "/#contact";
				  const updatedNav = nav.map((item) => ({
		...item,
		active: item.href === active
    }));
    setNav(updatedNav);
	  }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


	useEffect(() => {
	if (router.asPath === "/") {
		items[0].active = true;
		setNav(items);
	}
	else{
    const updatedNav = nav.map((item) => ({
      ...item,
      active: item.href === router.asPath
    }));
    setNav(updatedNav);
}
  }, [router.asPath]);
	return (
		<div className="flex gap-6 md:gap-10" >
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
									scroll={false}
									className= {cn("sm:text-lg hover:text-red-700 transition-colors duration-100",
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
						className="-ml-4 border-2 border-red-700 p-6 text-base hover:bg-transparent focus:ring-0 md:hidden"
					>
						<img src="./menu.png" width={30} height={10} alt=""className="-ml-4 mr-2" />
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
									className=  {cn(item.active && "text-red-700"
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
