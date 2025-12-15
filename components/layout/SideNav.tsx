"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/main-logo.png";
import { RiHome5Line } from "react-icons/ri";
import { IoMailOutline, IoWallet } from "react-icons/io5";
import { CiViewList, CiSettings } from "react-icons/ci";
import { TbChartBar } from "react-icons/tb";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { label: "Home", icon: RiHome5Line },
  { label: "Discover", icon: IoMailOutline },
  { label: "Order List", icon: CiViewList },
  { label: "Analytics", icon: TbChartBar },
  { label: "Payment", icon: IoWallet },
  { label: "Settings", icon: CiSettings },
];

function SideBar() {
  const [hovered, setHovered] = useState(false);

  const expanded = hovered;

  return (
    <>
      {/* Backdrop blur whenever the sidebar is hover-expanded */}
      <div
        aria-hidden
        className={cn(
          "fixed inset-0 z-30 bg-black/20 backdrop-blur-sm",
          "transition-opacity duration-200 ease-out",
          "motion-reduce:transition-none",
          expanded ? "opacity-100" : "opacity-0",
          // Never block interaction; hover should feel "light" and non-modal
          "pointer-events-none"
        )}
      />

      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-expanded={expanded}
        className={cn(
          "fixed inset-y-0 left-0 z-40 h-screen overflow-x-hidden border-r border-purple-300",
          "flex flex-col gap-6 p-4",
          "bg-purple-200/90 text-purple-900 dark:bg-purple-400",
          "transition-[width,background-color,color] duration-200 ease-out",
          "motion-reduce:transition-none",
          "will-change-[width]",
          expanded && "w-48 bg-purple-400/90 text-white",
          !expanded && "w-20"
        )}>
        
        <Image
          src={logo}
          alt="Art Palace"
          width={100}
          height={100}
          priority
          className="scale-125 object-cover my-5 flex self-center"
        />

        <nav className="flex min-h-0 flex-1 flex-col">
          <ul className="flex flex-col gap-2">
            {navItems.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Button
                  variant="secondary"
                  className={cn(
                    "group w-full",
                    "bg-white/50 text-purple-900",
                    "transition-colors duration-200 ease-out",
                    "motion-reduce:transition-none",
                    "hover:bg-white/70",
                    expanded
                      ? "justify-start gap-2 px-3"
                      : "justify-center gap-0 px-3"
                  )}>
                  <Icon
                    className={cn(
                      "h-5 w-5 shrink-0 text-purple-700",
                      "transition-transform duration-200 ease-out",
                      "motion-reduce:transition-none",
                      "group-hover:scale-110"
                    )}
                  />
                  <span
                    className={cn(
                      "overflow-hidden whitespace-nowrap text-sm font-light",
                      "transition-[opacity,transform,max-width,margin] duration-200 ease-out",
                      "motion-reduce:transition-none",
                      expanded
                        ? "ml-1 max-w-48 opacity-100 translate-x-0"
                        : "ml-0 max-w-0 opacity-0 -translate-x-1 pointer-events-none"
                    )}>
                    {label}
                  </span>
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2" />
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
