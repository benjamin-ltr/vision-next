import { Navbar, ScrollToTop, Theme } from "@/features/shared";
import i18next from "i18next";
import Link from "next/link";
import "./page.scss";
import { CommunitiesList } from "./_components";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/core/react-query";
import { getCommunitiesQuery } from "@/api/queries";

interface Props {
  searchParams: Record<string, string | undefined>;
}

export default async function Communities({ searchParams }: Props) {
  await getCommunitiesQuery(searchParams.sort ?? "rank", searchParams.q ?? "").prefetch();

  return (
    <HydrationBoundary state={dehydrate(getQueryClient())}>
      <ScrollToTop />
      <Theme />
      <Navbar />
      <div className="app-content communities-page">
        <div className="community-list">
          <div className="list-header">
            <h1 className="list-title">{i18next.t("communities.title")}</h1>
            <Link href="/communities/create" className="create-link">
              {i18next.t("communities.create")}
            </Link>
          </div>
          <CommunitiesList query={searchParams.q ?? ""} sort={searchParams.sort || "rank"} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
