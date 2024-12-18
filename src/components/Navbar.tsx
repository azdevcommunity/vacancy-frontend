'use client'

import {Menu, Search, ChevronRight} from 'lucide-react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Separator} from "@/components/ui/separator"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        {name: "Ana Səhifə", link: "#", icon: "🏠", path: "/"},
        {
            name: "Vakansiyalar",
            link: "#",
            icon: "💼",
            subItems: [
                {name: "Full-time", link: "#"},
                {name: "Part-time", link: "#"},
                {name: "Remote", link: "#"},
                {name: "Internship", link: "#"},
            ],
        },
        {name: "Namizədlər", link: "#", icon: "👥"},
        {name: "Haqqımızda", link: "#", icon: "ℹ️"},
    ]

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5"/>
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                        <div className="bg-gradient-to-br from-primary to-primary-foreground p-6 text-white">
                            <h2 className="text-2xl font-bold">Menu</h2>
                            <p className="text-sm opacity-80">Daha çox şey et</p>
                        </div>
                        <nav className="p-4">
                            {menuItems.map((item, index) => (
                                <div key={index} className="mb-4">
                                    {item.subItems ? (
                                        <div className="space-y-2">
                                            <h2 className="flex items-center text-lg font-semibold">
                                                <span className="mr-2 text-2xl">{item.icon}</span>
                                                {item.name}
                                            </h2>
                                            <div className="ml-8 space-y-1">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subItem.link}
                                                        className="flex items-center rounded-md py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <ChevronRight className="mr-2 h-4 w-4"/>
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.link}
                                            className="flex items-center rounded-md py-2 text-lg font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="mr-2 text-2xl">{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    )}
                                    {index < menuItems.length - 1 && <Separator className="my-2"/>}
                                </div>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>

                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="hidden gap-6 md:flex ml-10">
                        <NavigationMenuItem>
                            <Link to="#">
                                <NavigationMenuLink
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                    Ana Səhifə
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Vakansiyalar
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="min-w-[220px]">
                                <ul className="grid gap-2 p-4">
                                    <li>
                                        <Link to="#"
                                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md">
                                            Full-time
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md">
                                            Part-time
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md">
                                            Remote
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md">
                                            Internship
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="#">
                                <NavigationMenuLink
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                    Namizədlər
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="#">
                                <NavigationMenuLink
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                    Haqqımızda
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center justify-center">
                    <Link to="/" className="text-xl font-semibold">
                        LOQO
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden items-center gap-4 sm:flex">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <Input
                                type="search"
                                placeholder="Axtar..."
                                className="w-48 bg-background pl-8"
                            />
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-sm font-medium">
                        Profil
                    </Button>
                </div>
            </div>
        </header>
    )
}