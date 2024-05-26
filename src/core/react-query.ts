import { QueryClient } from "@tanstack/react-query";

export enum QueryIdentifiers {
  COMMUNITY_THREADS = "community-threads",
  THREADS = "threads",
  ENTRY = "entry",
  ENTRY_THUMB = "entry-thumb",
  NORMALIZED_ENTRY = "normalized-entry",
  DELETED_ENTRY = "deleted-entry",
  ENTRY_PIN_TRACK = "entry-pin-track",
  COMMUNITY = "community",
  COMMUNITY_RANKED_POSTS = "community-ranked-posts",
  DECK_USER = "deck-user",
  DECK_COMMUNITY = "deck-community",

  SWAP_FORM_CURRENCY_RATE = "swap-form-currency-rate",
  POINTS = "points",
  THREE_SPEAK_VIDEO_LIST = "three-speak-video-list",
  THREE_SPEAK_VIDEO_LIST_FILTERED = "three-speak-video-list-filtered",
  DRAFTS = "drafts",
  BY_DRAFT_ID = "by-draft-id",
  FETCH_DISCUSSIONS = "fetch-discussions",
  FETCH_MUTED_USERS = "fetch-muted-users",
  GET_ACCOUNT_FULL = "get-account-full",
  GET_POSTS = "get-posts",
  GET_BOTS = "get-bots",
  GET_BOOST_PLUS_PRICES = "get-boost-plus-prices",
  GET_BOOST_PLUS_ACCOUNTS = "get-boost-plus-accounts",

  POLL_DETAILS = "poll-details",
  GET_RELATIONSHIP_BETWEEN_ACCOUNTS = "get-relationship-between-accounts",
  COMMUNITIES = "communities",
  WITNESSES = "witnesses",
  GALLERY_IMAGES = "gallery-images",
  NOTIFICATIONS_UNREAD_COUNT = "notifications-unread-count",
  NOTIFICATIONS_SETTINGS = "notifications-settings",
  GET_ACCOUNTS = "get-accounts",
  FRAGMENTS = "fragments",
  FAVOURITES = "favourites",
  DYNAMIC_PROPS = "dynamic-props",
  BOOKMARKS = "bookmarks",
  POST_HEADER = "post-header",
  SCHEDULES = "schedules",
  TRENDING_TAGS = "trending-tags",
  DISCOVER_LEADERBOARD = "discover-leaderboard",
  DISCOVER_CURATION = "discover-curation",
  CONTRIBUTORS = "contributors",
  GIFS = "GIFS",
  NOTIFICATIONS = "NOTIFICATIONS"
}

export function getPristineQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false
      }
    }
  });
}
