import { LeaderBoardDuration } from "@/entities";
import { EcencyConfigManager } from "@/config";
import { getDiscoverLeaderboardQuery } from "@/api/queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/core/react-query";
import { DiscoverPeriodDropdown } from "@/app/discover/_components/discover-period-dropdown";
import i18next from "i18next";
import { Tooltip } from "@ui/tooltip";
import React from "react";
import {
  UsersTableListItem,
  UsersTableListLayout,
  UserTableListHeader
} from "@/app/discover/_components";
import { Badge } from "@ui/badge";
import { UilInfoCircle } from "@tooni/iconscout-unicons-react";

interface Props {
  searchParams: Record<string, string | undefined>;
}

export default async function LeaderboardPage({ searchParams }: Props) {
  const data = await getDiscoverLeaderboardQuery(
    (searchParams["period"] as LeaderBoardDuration) ?? "day"
  ).prefetch();
  const period = searchParams["period"] as LeaderBoardDuration;

  return (
    <HydrationBoundary state={dehydrate(getQueryClient())}>
      <EcencyConfigManager.Conditional
        condition={({ visionFeatures }) => visionFeatures.discover.leaderboard.enabled}
      >
        <UsersTableListLayout>
          <div className="flex justify-between items-center">
            <div className="font-semibold">{i18next.t(`leaderboard.title-${period ?? "day"}`)}</div>
            <DiscoverPeriodDropdown />
          </div>
          <UserTableListHeader>
            <span className="text-sm opacity-50">{i18next.t("leaderboard.header-reward")}</span>
            <Tooltip content={i18next.t("leaderboard.header-score-tip")}>
              <div className="text-sm opacity-50 flex items-center gap-1">
                <UilInfoCircle className="w-4 h-4" />
                <span className="score">{i18next.t("leaderboard.header-score")}</span>
              </div>
            </Tooltip>
          </UserTableListHeader>
          {data && data.length > 0 && (
            <div className="flex flex-col gap-4">
              {data.map((r, i) => (
                <UsersTableListItem username={r._id} i={i} key={i}>
                  <div className="text-blue-dark-sky text-sm font-semibold">
                    {r.points !== "0.000" && `${r.points} POINTS`}
                  </div>
                  <Badge>{r.count}</Badge>
                </UsersTableListItem>
              ))}
            </div>
          )}
        </UsersTableListLayout>
      </EcencyConfigManager.Conditional>
    </HydrationBoundary>
  );
}
