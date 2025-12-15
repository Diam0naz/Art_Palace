"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../switch-themes";
import { WalletIcon } from "../WalletIcon";
import SearchBar from "../elements/SearchBar";
import { Button } from "../ui/button";

const NavBar = () => {
  const pathname = usePathname();
  const menu: { label: string; href: string; startsWith?: boolean }[] = [
    // { label: "Home", href: "/" },
    { label: "Marketplace", href: "/products", startsWith: true },
    { label: "Trending", href: "/trending", startsWith: true },
    { label: "Communities", href: "/communities" },
  ];

  const isActive = (href: string, startsWith?: boolean) =>
    startsWith ? pathname?.startsWith(href) : pathname === href;

  return (
    <nav className="bg-dawn-orange/40 text-foreground border-b border-purple-300 font-inter fixed w-full pr-20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-full items-center justify-between gap-6 p-4">   
        <SearchBar />  
        <div className="flex justify-center items-center gap-2">
          <ul className="flex items-center gap-6 text-sm py-2 px-4 rounded-full">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href, item.startsWith)
                      ? "text-purple-400 font-light"
                      : "font-light font-inter text-purple-300"
                  }`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="secondary"
            className="rounded-lg dark:bg-purple-400 bg-purple-300 text-white/90 gap-1.5 px-5 py-2 hover:bg-purple-400">
            Connect Wallet
            <WalletIcon className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
