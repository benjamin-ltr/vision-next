import { useMutation } from "@tanstack/react-query";
import { Entry } from "@/entities";
import { useGlobalStore } from "@/core/global-store";
import { formatError, vote } from "@/api/operations";
import { error } from "@/features/shared";
import { getQueryClient, QueryIdentifiers } from "@/core/react-query";
import { EcencyEntriesCacheManagement } from "@/core/caches";

export function useEntryVote(entry?: Entry) {
  const activeUser = useGlobalStore((s) => s.activeUser);
  const updateActiveUser = useGlobalStore((s) => s.updateActiveUser);

  return useMutation({
    mutationKey: ["entryVote", entry?.author, entry?.permlink],
    mutationFn: async ({ weight, estimated }: { weight: number; estimated: number }) => {
      if (!entry) {
        throw new Error("Entry not provided");
      }

      if (!activeUser) {
        throw new Error("Active user not provided");
      }

      await vote(activeUser?.username, entry.author, entry.permlink, weight);
      await updateActiveUser(); // refresh voting power

      return [
        estimated,
        [
          ...(entry.active_votes
            ? entry.active_votes.filter((x) => x.voter !== activeUser?.username)
            : []),
          { rshares: weight, voter: activeUser?.username }
        ]
      ] as const;
    },
    onSuccess: ([estimated, votes]) => {
      if (!entry) {
        throw new Error("No entry provided");
      }

      const newPayout = entry.payout + estimated;
      if (entry.active_votes) {
        EcencyEntriesCacheManagement.updateVotes(entry, [...votes], newPayout);
      } else {
        EcencyEntriesCacheManagement.invalidate(entry);
      }

      getQueryClient().invalidateQueries({
        queryKey: [QueryIdentifiers.ENTRY_ACTIVE_VOTES, entry!.author, entry!.permlink]
      });
    },
    onError: (e) => error(...formatError(e))
  });
}
