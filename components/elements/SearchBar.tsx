import React from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "../SearchIcon";

const SearchBar = () => {
  return (
    <>
      <div>
        <span
          className={cn(
            "w-90 h-full p-2 rounded-lg",
            "transition-color duration-200 ease-out",
            "bg-purple-200 text-violet-500 dark:bg-purple-400 active:bg-violet-400 hover:text-violet-700",
            "flex inset-0"
          )}>
          <input
            type="text"
            placeholder="Search Art Palace.."
            className={cn("w-full h-full", "p-1 rounded-full outline-none")}
          />
          <SearchIcon />
        </span>
      </div>
    </>
  );
};

export default SearchBar;
