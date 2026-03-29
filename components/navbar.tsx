"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projectsSubItems = [
  {
    label: "UX Design",
    items: [
      { name: "Kaleido ColorLab", href: "/projects/kaleido-colorlab" },
      { name: "Gaahleri Shop", href: "/projects/gaahleri-shop" },
    ],
  },
  {
    label: "User Research",
    items: [
      { name: "YoloLiv User Stories", href: "/projects/yololiv-user-stories" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/10 bg-background/80 backdrop-blur-sm pl-8 md:pl-12">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span
            className="text-2xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
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
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${
                      pathname === "/about"
                        ? "bg-accent text-primary font-semibold"
                        : ""
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[340px] p-4 space-y-4">
                    {projectsSubItems.map((group) => (
                      <div key={group.label}>
                        <p
                          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {group.label}
                        </p>
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            legacyBehavior
                            passHref
                          >
                            <NavigationMenuLink
                              className={`block rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors ${
                                pathname === item.href
                                  ? "bg-accent text-primary font-semibold"
                                  : "text-foreground"
                              }`}
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {item.name}
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${
                      pathname === "/contact"
                        ? "bg-accent text-primary font-semibold"
                        : ""
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
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
                  href="/about"
                  className="w-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  About
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {projectsSubItems.map((group) => (
                <div key={group.label}>
                  <DropdownMenuLabel
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {group.label}
                  </DropdownMenuLabel>
                  {group.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="w-full pl-4"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              ))}

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
