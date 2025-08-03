"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { GlowEffect } from "./core/glow-effect";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

interface NavigationMenuProps {
  getLinkClasses: () => void;
}

export function NavigationMenuDemo({ getLinkClasses }: NavigationMenuProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem
          className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
        >
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent focus:bg-transparent data-[state=open]:!bg-transparent hover:text-current focus:text-current data-[state=open]:text-current">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-zinc-900 border-none p-8 shadow-xl">
            <p className="text-[#F6F6F6] mb-1">
              Advanced analytics and AI-powered insights
            </p>
            <p className="text-xs text-[#F6F6F6]/60 mb-5">
              Advanced analytics and AI-powered insights Advanced analytics and
              AI-powered insights
            </p>
            <ul className="grid gap-4 md:w-[400px] lg:w-[700px] lg:grid-cols-3 data-[state=open]:!bg-transparent">
              <li className="row-span-1">
                <NavigationMenuLink asChild className="hover:!bg-[#1F1F1F]/80">
                  <a
                    className="bg-[#1F1F1F]/40 text-[#F5F7F9] backdrop-blur-lg p-6 rounded-xl border-[#F5F7F9]/10 border block no-underline outline-none select-none transition-all duration-300 hover:bg-[#1F1F1F]/90 hover:border-[#F5F7F9]/20 shadow-[inset_0_1px_0_rgba(245,247,249,0.1),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(245,247,249,0.15),inset_0_-1px_0_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)]"
                    href="/omelas"
                  >
                    <h3 className="text-xl text-[#F5F7F9] font-medium">
                      App 1
                    </h3>
                    <p className="text-[#F5F7F9]/60 mt-2">
                      Beautifully designed components
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <li className="row-span-1">
                <NavigationMenuLink asChild className="hover:!bg-[#1F1F1F]/80">
                  <a
                    className="bg-[#1F1F1F]/40 text-[#F5F7F9] backdrop-blur-lg p-6 rounded-xl border-[#F5F7F9]/10 border block no-underline outline-none select-none transition-all duration-300 hover:bg-[#1F1F1F]/90 hover:border-[#F5F7F9]/20 shadow-[inset_0_1px_0_rgba(245,247,249,0.1),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(245,247,249,0.15),inset_0_-1px_0_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)]"
                    href="/"
                  >
                    <h3 className="text-xl text-[#F5F7F9] font-medium">
                      App 2
                    </h3>
                    <p className="text-[#F5F7F9]/60 mt-2">
                      Advanced analytics and AI-powered insights
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <li className="row-span-1">
                <NavigationMenuLink asChild className="hover:!bg-[#1F1F1F]/80">
                  <a
                    className="bg-[#1F1F1F]/40 text-[#F5F7F9] backdrop-blur-lg p-6 rounded-xl border-[#F5F7F9]/10 border block no-underline outline-none select-none transition-all duration-300 hover:bg-[#1F1F1F]/90 hover:border-[#F5F7F9]/20 shadow-[inset_0_1px_0_rgba(245,247,249,0.1),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(245,247,249,0.15),inset_0_-1px_0_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)]"
                    href="/"
                  >
                    <div className="absolute top-4 right-4 max-w-[100px]">
                      <GlowEffect
                        scale={0.8}
                        colors={["#46ADC5CC", "#EF4444CC", "#2573A3CC"]}
                        className="max-w-[100px]"
                      />
                      <span className="relative text-[8px] font-light border-1 text-[#F6F6F6]/70 border-[#F6F6F6]/70 p-1 bg-[#313130]/20 rounded-sm">
                        Coming soon
                      </span>
                    </div>
                    <h3 className="text-xl text-[#F5F7F9] font-medium">
                      App 2
                    </h3>
                    <p className="text-[#F5F7F9]/60 mt-2">
                      Advanced analytics and AI-powered insights
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
        >
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent focus:bg-transparent data-[state=open]:!bg-transparent hover:text-current focus:text-current data-[state=open]:text-current">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
        >
          <NavigationMenuLink
            asChild
            className={`!bg-transparent hover:!bg-transparent focus:bg-transparent data-[state=open]:!bg-transparent hover:text-current focus:text-current data-[state=open]:text-current ${navigationMenuTriggerStyle()}`}
          >
            <Link
              href="/docs"
              className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
            >
              Docs
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem
          className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
        >
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent focus:bg-transparent data-[state=open]:!bg-transparent hover:text-current focus:text-current data-[state=open]:text-current">
            List
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem
          className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
        >
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent focus:bg-transparent data-[state=open]:!bg-transparent hover:text-current focus:text-current data-[state=open]:text-current">
            Simple
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem
          className={`bg-transparent transition-colors duration-300 ${getLinkClasses()}`}
        >
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent focus:bg-transparent data-[state=open]:!bg-transparent hover:text-current focus:text-current data-[state=open]:text-current">
            With Icon
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
