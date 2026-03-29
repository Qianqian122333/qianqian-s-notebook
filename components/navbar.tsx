"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/10 bg-background/80 backdrop-blur-sm pl-8 md:pl-12">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span
            className="text-3xl font-extrabold text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-body)" }}
          >
            QianqianWei
          </span>
          <span
            className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary/60 rounded-full"
            style={{ transform: "rotate(-1deg)" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={`inline-flex h-11 w-max items-center justify-center rounded-lg px-5 py-2 text-xl font-bold transition-all hover:text-primary ${
                      pathname === "/" ? "text-primary font-bold" : ""
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={`inline-flex h-11 w-max items-center justify-center rounded-lg px-5 py-2 text-xl font-bold transition-all hover:text-primary ${
                      pathname === "/about" ? "text-primary font-bold" : ""
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects"
                    className={`inline-flex h-11 w-max items-center justify-center rounded-lg px-5 py-2 text-xl font-bold transition-all hover:text-primary ${
                      pathname === "/projects" ? "text-primary font-bold" : ""
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={`inline-flex h-11 w-max items-center justify-center rounded-lg px-5 py-2 text-xl font-bold transition-all hover:text-primary ${
                      pathname === "/contact" ? "text-primary font-bold" : ""
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link
                  href="/"
                  className="w-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Home
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  href="/about"
                  className="w-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  About
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  href="/projects"
                  className="w-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Projects
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  href="/contact"
                  className="w-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
