import { EcencyQueriesManager, QueryIdentifiers } from "@/core/react-query";
import { bridgeApiCall, resolvePost } from "@/api/bridge";
import { Entry } from "@/entities";

type PageParam = { author: string | undefined; permlink: string | undefined };

export const getAccountPostsQuery = (
  username: string | undefined,
  filter = "posts",
  limit = 20,
  observer = "",
  enabled = true
) =>
  EcencyQueriesManager.generateClientServerInfiniteQuery({
    queryKey: [QueryIdentifiers.GET_POSTS, username, filter, limit],
    queryFn: async ({ pageParam }) => {
      const resp = await bridgeApiCall<Entry[] | null>("get_account_posts", {
        sort: filter,
        account: username,
        start_author: pageParam.author,
        start_permlink: pageParam.permlink,
        limit,
        observer
      });
      if (resp) {
        return await Promise.all(resp.map((p) => resolvePost(p, observer)));
      }

      return [];
    },
    enabled: !!username && enabled,
    initialData: { pages: [], pageParams: [] },
    initialPageParam: { author: undefined, permlink: undefined } as PageParam,
    getNextPageParam: (lastPage: Entry[]) => {
      const last = lastPage?.[lastPage!.length - 1];
      return {
        author: last?.author,
        permlink: last?.permlink
      };
    }
  });
