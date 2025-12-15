import React from 'react'
import{ cn }from "@/lib/utils"
import HeroPage from '../pages/HeroPage'

const HomePage = () => {
  return (
    <div className={cn("grid grid-cols-7 p-2 m-5")}>
      <div className={cn("col-span-3 col-start-3", "flex justify-center items-center")}>
        <HeroPage />
      </div>
    </div>
  )
}

export default HomePage
