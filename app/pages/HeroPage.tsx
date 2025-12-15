import React from "react";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";
import SplitText from "@/components/SplitText";

const HeroPage = () => {
  const steps = [
    {
      title: "Create Your Community",
      description:
        "Create your Own community and launch your tokenized NFTs that will drive your own economy",
      image: "🚀",
    },
    {
      title: "Sell Your NFTs",
      description:
        "Sell your NFTs and build a thriving community. Here Everybody wins, from appreciating value of NFTs to the growing value of your very own community token",
      image: "✨",
    },
    {
      title: "Build Your Community",
      description:
        "Build your community with active engagements as an Artist and grow your brand and business like you've never anticipated",
      image: "⚒️",
    },
  ];

  const cards = steps.map((step, index) => (
    <div key={index}>
      <SpotlightCard
        className="custom-spotlight-card w-80 h-64 dark:bg-black bg-purple-900 hover:border hover:border-purple-500 border-2 transition-all duration-15 ease-in"
        spotlightColor={"rgba(191, 85, 236, 1)"}>
        <div className={cn("w-full h-full", "text-purple-50")}>
          {" "}
          <span className="flex gap-2 mb-2 items-center justify-start">
            <h3
              className={cn(
                "font-display text-xl font-bold whitespace-nowrap "
              )}>
              {step.title}
            </h3>
            <span>{step.image}</span>
          </span>
          <p className="font-light text-sm">{step.description}</p>
        </div>
      </SpotlightCard>
    </div>
  ));

  return (
    <div>
      <section className="mx-auto h-screen flex flex-col justify-center items-center">
        <SplitText
          text=" Launch Your Nfts!"
          tag="h1"
          className={cn(
            "text-9xl lg:text-6xl md:text-5xl font-bold font-display text-center text-purple-500 dark:text-purple-400"
          )}
          delay={150}
          duration={2}
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="100px"
          ease={"elastic.out(1,0,4)"}
          textAlign="center"
        />

        <p
          className={cn(
            "font-body font-mono text-xl text-center dark:text-purple-200 text-violet-500 mt-3"
          )}>
          Create governance tokens, sell NFT artworks, and build a thriving
          community of collectors who become stakeholders in your creative
          journey.
        </p>
        <div className={cn("flex items-center justify-center gap-5 mt-20")}>
          <button
            className={cn(
              "border-2 border-violet-500 rounded-lg p-3",
              "text-2xl bg-linear-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent",
              "font-display"
            )}>
            Launch your Community!
          </button>
          <button className="transition-all duration-200 ease-linear group hover:bg-linear-to-br from-purple-50 to-purple-300 dark:to-purple-600 hover:cursor-pointer p-3 rounded-lg ">
            <span
              className={cn(
                "text-2xl bg-linear-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent font-display group-hover:to-violet-700",
                ""
              )}>
              Explore the Marketplace
            </span>
          </button>
        </div>
      </section>
      <section
        className={cn("flex flex-col gap-5 items-center justify-center p-1")}>
        <h2
          className={cn("font-bold text-5xl font-display", "text-violet-300")}>
          How It Works
        </h2>
        <h4 className="">
          Three simple steps to launch your tokenized artist community
        </h4>
        <div className="flex flex-1 gap-2.5">{cards}</div>
      </section>
    </div>
  );
};

export default HeroPage;
