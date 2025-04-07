import React from "react";

function Card({ name = "pass the name" }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white ]">
      <div className="mx-auto flex w-full mt-20 flex-col justify-center px-5 pt-0 md:h-[unset] max-w-[520px] lg:px-6 xl:pl-0">
        <div className="relative flex w-full flex-col pt-[20px] md:pt-0">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min flex items-center aligh-center max-w-full py-8 px-4 dark:border-white">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full min-h-[68px] min-w-[68px]">
              <img
                className="aspect-square h-full w-full"
                src="https://lh3.googleusercontent.com/a/ACg8ocKIWdfb7aIybpzBFfDOHi2TyFWvW73xKa2hXx8Zw1Xzoz62T18=s96-c"
              />
            </span>
            <div>
              <p className="text-xl font-extrabold text-white leading-[100%] dark:text-white pl-4 md:text-3xl">
                {name}
              </p>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-2 pl-4 md:text-base">
                CTO and Founder
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-white mt-20 mx-auto w-max">
        Profile Card Component from
        <a
          href="https://horizon-ui.com/shadcn-ui?ref=twcomponents"
          target="_blank"
          className="text-brand-500 font-bold"
        >
          Horizon AI Boilerplate
        </a>
      </p>
    </div>
  );
}

export default Card;
