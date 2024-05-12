"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useMount from "react-use/lib/useMount";
import * as ls from "@/utils/local-storage";
import Cookies from "js-cookie";
import { useGlobalStore } from "@/core/global-store";
import { PushNotificationsProvider } from "@/features/push-notifications";

export default function Providers({ children }: PropsWithChildren) {
  const setActiveUser = useGlobalStore((state) => state.setActiveUser);
  const updateActiveUser = useGlobalStore((state) => state.updateActiveUser);

  useMount(() => {
    const activeUsername = ls.get("active_user") ?? Cookies.get("active_user");
    if (activeUsername) {
      setActiveUser(activeUsername);
      updateActiveUser();
    }
  });

  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              refetchOnMount: false
            }
          }
        })
      }
    >
      <PushNotificationsProvider>{children}</PushNotificationsProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
