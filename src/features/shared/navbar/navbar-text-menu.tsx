import React from "react";
import Link from "next/link";
import i18next from "i18next";
import { EcencyConfigManager } from "@/config";

export function NavbarTextMenu() {
  return (
    <div className="hidden sm:flex md:hidden xl:flex text-menu items-center justify-center h-full md:mr-2">
      <Link
        className="menu-item text-gunmetal hover:text-gray-warm dark:text-blue-duck-egg mt-0"
        href="/discover"
      >
        {i18next.t("navbar.discover")}
      </Link>
      <Link
        className="menu-item text-gunmetal hover:text-gray-warm dark:text-blue-duck-egg mt-0"
        href="/waves"
      >
        {i18next.t("navbar.waves")}
      </Link>
      <EcencyConfigManager.Conditional
        condition={({ visionFeatures }) => visionFeatures.decks.enabled}
      >
        <Link
          className="menu-item text-gunmetal hover:text-gray-warm dark:text-blue-duck-egg mt-0"
          href="/decks"
        >
          {i18next.t("navbar.decks")}
        </Link>
      </EcencyConfigManager.Conditional>
    </div>
  );
}
