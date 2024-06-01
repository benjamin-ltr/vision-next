import { Fragment, useEffect, useState } from "react";
import "./community.scss";
import { useQueryClient } from "@tanstack/react-query";
import { useCommunityCache } from "@/core/caches";
import { Feedback, LinearProgress, Navbar, ScrollToTop, Theme } from "@/features/shared";
import {
  CommunityActivities,
  CommunityCard,
  CommunityCover,
  CommunityMenu,
  CommunitySubscribers,
  JoinCommunityModal
} from "@/app/[filterOrCategory]/[entryOrCommunity]/_components";
import defaults from "@/defaults.json";

interface Props {
  communityName: string;
}

export const CommunityPage = ({ communityName }: Props) => {
  const getSearchParam = () => {
    const updatedLocation = props.location.search.replace(/communityid=.*?(?=&|$)/, "");
    return updatedLocation.replace("?", "").replace("q", "").replace("=", "").replace("&", "");
  };
  const queryClient = useQueryClient();
  const { data: community } = useCommunityCache(communityName);

  const [account, setAccount] = useState<Account | undefined>(
    props.accounts.find(({ name }) => [props.match.params.name])
  );
  const [typing, setTyping] = useState(false);
  const [search, setSearch] = useState(getSearchParam());
  const [searchDataLoading, setSearchDataLoading] = useState(getSearchParam().length > 0);
  const [searchData, setSearchData] = useState<SearchResult[]>([]);
  const [isJoinCommunity, setIsJoinCommunity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const prevMatch = usePrevious(props.match);
  const prevActiveUser = usePrevious(props.activeUser);

  useEffect(() => {
    setIsLoading(true);

    if (search.length) handleInputChange(search);

    const { match, fetchEntries } = props;
    const { filter, name } = match.params;
    // fetch blog posts.
    if (EntryFilter[filter]) fetchEntries(filter, name, false);
    const urlParams = new URLSearchParams(location.search);
    const communityId = urlParams.get("communityid");
    if (communityId) {
      setIsJoinCommunity(true);
    }

    fetchSubscriptions();
  }, []);

  useEffect(() => {
    if (community?.name === props.match.params.name) {
      setIsLoading(false);
      props.addAccount(community);
      setAccount({ ...account, ...community });
    }
  }, [community]);

  useEffect(() => {
    const { match, fetchEntries } = props;
    const { filter, name } = match.params;

    if (!prevMatch) {
      return;
    }

    const { params: prevParams } = prevMatch;

    // community changed. fetch community and account data.
    if (name !== prevParams.name)
      queryClient.invalidateQueries([QueryIdentifiers.COMMUNITY, match.params.name]);

    //  community or filter changed
    if ((filter !== prevParams.filter || name !== prevParams.name) && EntryFilter[filter]) {
      fetchEntries(match.params.filter, match.params.name, false);
    }

    // re-fetch subscriptions once active user changed.
    const { activeUser } = props;
    if (prevActiveUser?.username !== activeUser?.username) fetchSubscriptions();
  }, [props.match, props.activeUser]);

  const handleInputChange = async (value: string): Promise<void> => {
    setTyping(false);
    if (value.trim() !== "") {
      setSearchDataLoading(true);

      let query = `${value} category:${props.global.tag}`;

      const data = await searchApi(query, "newest", "0");
      if (data?.results) {
        setSearchData(
          data.results.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        );
        setSearchDataLoading(false);
      }
    }
  };

  const fetchSubscriptions = async () => {
    const { activeUser, subscriptions, updateSubscriptions } = props;
    if (activeUser && subscriptions.length === 0) {
      const subs = await getSubscriptions(activeUser.username);
      if (subs) updateSubscriptions(subs);
    }
  };

  const bottomReached = () => {
    const { match, entries, fetchEntries } = props;
    const { filter, name } = match.params;
    const groupKey = makeGroupKey(filter, name);

    const data = entries[groupKey];
    const { loading, hasMore } = data;

    if (!loading && hasMore && search.length === 0) fetchEntries(filter, name, true);
  };

  const reload = async () => {
    queryClient.invalidateQueries([QueryIdentifiers.COMMUNITY, props.match.params.name]);

    const { match, fetchEntries, invalidateEntries } = props;
    const { filter, name } = match.params;

    if (EntryFilter[filter]) {
      invalidateEntries(makeGroupKey(filter, name));
      fetchEntries(filter, name, false);
    }
  };

  const delayedSearch = _.debounce(handleInputChange, 2000);

  const handleChangeSearch = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { value } = event.target;
    setSearch(value);
    setTyping(value.length !== 0);
    delayedSearch(value);
  };

  const getMetaProps = () => {
    const { filter } = props.match.params;
    const ncount = props.notifications.unread > 0 ? `(${props.notifications.unread}) ` : "";
    const fC = capitalize(filter);
    const title = `${ncount}${community!!.title.trim()} community ${filter} list`;
    const description = _t("community.page-description", {
      f: `${fC} ${community!!.title.trim()}`
    });
    const url = `/${filter}/${community!!.name}`;
    const rss = `${defaults.base}/${filter}/${community!!.name}/rss.xml`;
    const image = `${defaults.imageServer}/u/${community!!.name}/avatar/medium`;
    const canonical = `${defaults.base}/created/${community!!.name}`;

    return { title, description, url, rss, image, canonical };
  };

  return community && account ? (
    <>
      <JoinCommunityModal
        community={community}
        show={isJoinCommunity}
        setShow={setIsJoinCommunity}
      />
      <ScrollToTop />
      <Theme />
      <Feedback />
      <Navbar />
      <div className="app-content community-page">
        <div className="profile-side">
          <CommunityCard account={account} community={community} />
        </div>
        <span itemScope={true} itemType="http://schema.org/Organization">
          <meta itemProp="name" content={community.title.trim() || community.name} />
          <span itemProp="logo" itemScope={true} itemType="http://schema.org/ImageObject">
            <meta itemProp="url" content={getMetaProps().image} />
          </span>
          <meta itemProp="url" content={`${defaults.base}${getMetaProps().url}`} />
        </span>
        <div className="content-side">
          <CommunityMenu community={community} />
          <CommunityCover account={account!!} community={community} />

          {(() => {
            if (props.match.params.filter === "subscribers") {
              return <CommunitySubscribers community={community} />;
            }

            if (props.match.params.filter === "activities") {
              return <CommunityActivities community={community} />;
            }

            if (props.match.params.filter === "roles") {
              return <CommunityRoles {...props} community={community} />;
            }

            const groupKey = makeGroupKey(props.match.params.filter, community.name);
            const data = props.entries[groupKey];

            if (data !== undefined) {
              const entryList = data?.entries;
              const loading = data?.loading;

              return (
                <>
                  {loading && entryList.length === 0 ? <LinearProgress /> : ""}

                  {["hot", "created", "trending"].includes(props.match.params.filter) &&
                    !loading &&
                    entryList.length > 0 && (
                      <div className="searchProfile">
                        <SearchBox
                          placeholder={_t("search-comment.search-placeholder")}
                          value={search}
                          onChange={handleChangeSearch}
                          autoComplete="off"
                          showcopybutton={true}
                          filter={`${community!!.name}`}
                          username={props.match.params.filter}
                        />
                      </div>
                    )}
                  {typing ? (
                    <LinearProgress />
                  ) : search.length > 0 && searchDataLoading ? (
                    <LinearProgress />
                  ) : searchData.length > 0 && search.length > 0 ? (
                    <div className="search-list">
                      {searchData.map((res) => (
                        <Fragment key={`${res.author}-${res.permlink}-${res.id}`}>
                          {SearchListItem({ ...props, res: res })}
                        </Fragment>
                      ))}
                    </div>
                  ) : search.length === 0 ? null : (
                    _t("g.no-matches")
                  )}
                  {search.length === 0 && !searchDataLoading && (
                    <div className={_c(`entry-list ${loading ? "loading" : ""}`)}>
                      <div
                        className={_c(
                          `entry-list-body ${
                            props.global.listStyle === ListStyle.grid ? "grid-view" : ""
                          }`
                        )}
                      >
                        {loading && entryList.length === 0 && <EntryListLoadingItem />}
                        <EntryListContent
                          {...props}
                          entries={entryList}
                          promotedEntries={props.entries["__promoted__"].entries}
                          community={community}
                          loading={loading}
                        />
                      </div>
                    </div>
                  )}
                  {search.length === 0 && loading && entryList.length > 0 ? <LinearProgress /> : ""}
                  <DetectBottom onBottom={bottomReached} />
                </>
              );
            }

            return null;
          })()}
        </div>
      </div>
    </>
  ) : isLoading ? (
    <>
      <Navbar />
      <LinearProgress />
    </>
  ) : (
    <NotFound />
  );
};
