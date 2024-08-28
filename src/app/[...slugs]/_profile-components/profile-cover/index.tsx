"use client";

import React from "react";
import defaults from "@/defaults.json";
import { proxifyImageSrc, setProxyBase } from "@ecency/render-helper";
import "./_index.scss";
import { Account } from "@/entities";
import { FollowControls } from "@/features/shared";
import { useGlobalStore } from "@/core/global-store";
import { FavouriteBtn } from "@/features/shared/favorite-btn";
import { ProfileInfo } from "@/app/[...slugs]/_profile-components/profile-info";
import { EcencyConfigManager } from "@/config";

setProxyBase(defaults.imageServer);

interface Props {
  account: Account;
}

export function ProfileCover({ account }: Props) {
  const theme = useGlobalStore((state) => state.theme);
  const canUseWebp = useGlobalStore((state) => state.canUseWebp);
  const activeUser = useGlobalStore((state) => state.activeUser);

  const coverFallbackDay = "/assets/cover-fallback-day.png";
  const coverFallbackNight = "/assets/cover-fallback-night.png";
  let bgImage = "";

  if (account?.__loaded) {
    bgImage = theme === "day" ? coverFallbackDay : coverFallbackNight;
    if (account.profile?.cover_image) {
      bgImage = proxifyImageSrc(account.profile.cover_image, 0, 0, canUseWebp ? "webp" : "match");
    }
  }

  let style = {};
  if (bgImage) {
    style = { backgroundImage: `url('${bgImage}')` };
  }

  const hideControls = activeUser && activeUser.username === account?.name;

  return (
    <div className="profile-cover">
      <div className="cover-image" style={style} />
      <div className="follow-controls-holder">
        <ProfileInfo account={account} />
        {!hideControls && (
          <>
            <FollowControls targetUsername={account?.name} />
            <EcencyConfigManager.Conditional
              condition={({ visionFeatures }) => visionFeatures.favourites.enabled}
            >
              <FavouriteBtn targetUsername={account?.name} />
            </EcencyConfigManager.Conditional>
          </>
        )}
      </div>
    </div>
  );
}
