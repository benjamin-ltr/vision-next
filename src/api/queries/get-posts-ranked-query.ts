import { EcencyQueriesManager, QueryIdentifiers } from "@/core/react-query";
import { Entry } from "@/entities";
import { bridgeApiCall, resolvePost } from "@/api/bridge";

type PageParam = { author: string | undefined; permlink: string | undefined; hasNextPage: boolean };

export const getPostsRankedQuery = (
  sort: string,
  tag: string,
  limit = 20,
  observer = "",
  enabled = true
) =>
  EcencyQueriesManager.generateClientServerInfiniteQuery({
    queryKey: [QueryIdentifiers.GET_POSTS_RANKED, sort, tag, limit, observer],
    queryFn: async ({ pageParam }: { pageParam: PageParam }) => {
      if (!pageParam.hasNextPage) {
        return [];
      }

      const response = await bridgeApiCall<Entry[] | null>("get_ranked_posts", {
        sort,
        start_author: pageParam.author,
        start_permlink: pageParam.permlink,
        limit,
        tag,
        observer
      });

      if (response) {
        return Promise.all(response.map((item) => resolvePost(item, observer)));
      }

      return [];
    },
    enabled,
    initialData: { pages: [], pageParams: [] },
    initialPageParam: { author: undefined, permlink: undefined, hasNextPage: true } as PageParam,
    getNextPageParam: (lastPage: Entry[]) => {
      const last = lastPage?.[lastPage!.length - 1];
      return {
        author: last?.author,
        permlink: last?.permlink,
        hasNextPage: (lastPage?.length ?? 0) > 0
      };
    }
  });
