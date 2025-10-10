"use client";

import * as React from "react";
import {
  LucideSunMoon,
  LucideSun,
  LucideMoon,
  LucideComputer,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const centerNavItems: NavItem[] = [
  {
    title: "Products",
    href: "/products",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Contact Us",
    href: "/contact", // to add
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Cart",
    href: "/cart",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

type NavItem = { title: string; href: string; description: string };

interface NavbarProps {
  items?: NavItem[];
}

export function Navbar({ items = centerNavItems }: NavbarProps) {
  return (
    <NavigationMenu viewport={false}>
      {/* left */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <HomeLinkItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </HomeLinkItem>
              <HomeLinkItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </HomeLinkItem>
              <HomeLinkItem
                href="/docs/primitives/typography"
                title="Typography"
              >
                Styles for headings, paragraphs, lists...etc
              </HomeLinkItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/settings">Settings</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* center */}
      <NavigationMenuList>
        <NavigationMenuItem>
          {items.map((item) => (
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href={item.href}>{item.title}</a>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* right */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="after:hidden">
            <LucideSunMoon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2">
                    <LucideComputer />
                    System
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2">
                    <LucideSun />
                    Sun
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2">
                    <LucideMoon />
                    Moon
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function HomeLinkItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
