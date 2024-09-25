import { getAccountFullQuery } from "@/api/queries";
import { notFound } from "next/navigation";
import { WalletHiveEngine } from "../_components";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/core/react-query";

interface Props {
  params: { username: string };
}

export default async function EnginePage({ params: { username } }: Props) {
  const account = await getAccountFullQuery(username).prefetch();

  if (!account) {
    return notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(getQueryClient())}>
      <WalletHiveEngine account={account} />
    </HydrationBoundary>
  );
}
