import * as React from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

type NavItems = { title: string; href: string; description: string };
const links: NavItems[] = [
  {
    title: "Settings",
    href: "/settings",
    description:
      "An overlay that covers the entire screen to bring focus to a specific task.",
  },
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
    title: "Your Cart",
    href: "/cart",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

function NavLink({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

interface NavbarProps {
  items?: NavItems[];
}

export const Navbar = ({ items = links }: NavbarProps) => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home Link */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">
                <HomeIcon className="h-4 w-4 text-foreground" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Dropdown Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {items.map((item) => (
                  <NavLink key={item.href} title={item.title} href={item.href}>
                    {item.description}
                  </NavLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Docs Link */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/docs">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Button */}
      <ModeToggle />
    </div>
  );
};
