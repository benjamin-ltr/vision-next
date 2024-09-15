import { QueryIdentifiers } from "@/core/react-query";
import { lookupAccounts } from "@/api/hive";
import { error } from "@/features/shared";
import { formatError } from "@/api/operations";
import { useQuery } from "@tanstack/react-query";
import { useGlobalStore } from "@/core/global-store";

export function useSearchByUsernameQuery(query: string, excludeActiveUser = false) {
  const activeUser = useGlobalStore((s) => s.activeUser);

  return useQuery({
    queryKey: [QueryIdentifiers.SEARCH_BY_USERNAME, query],
    staleTime: Infinity,
    refetchOnMount: true,
    queryFn: async () => {
      if (!query) {
        return [];
      }

      try {
        const resp = await lookupAccounts(query, 5);
        if (resp) {
          resp.filter((item) => (excludeActiveUser ? item !== activeUser?.username : true));
        }
      } catch (e) {
        error(...formatError(e));
      } finally {
      }
    }
  });
}