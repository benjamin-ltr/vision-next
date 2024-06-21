import React from "react";
import i18next from "i18next";
import Image from "next/image";

export function PerksHeader() {
  return (
    <div className="">
      <div className="absolute hidden lg:block top-16 left-0 right-0 bottom-0">
        <Image
          width={1920}
          height={1920}
          src="/assets/signup.png"
          alt=""
          className="absolute top-0 right-0 bottom-0 max-w-[55vw] w-full"
        />
        <div className="bg-gradient-to-t from-blue-duck-egg dark:from-black to-transparent w-full h-full min-h-[500px] relative" />
      </div>

      <div className="md:min-h-[400px] rounded-b-3xl p-6 items-end justify-start grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 relative">
          <h1 className="text-xl md:text-5xl relative md:leading-[4rem]">
            <b className="text-blue-dark-sky">{i18next.t("perks.title")}</b> –{" "}
            {i18next.t("perks.title-next")}
          </h1>
        </div>
      </div>
    </div>
  );
}
