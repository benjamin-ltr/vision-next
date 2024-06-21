import React from "react";

import Comment from "./index";

import { entryInstance1, globalInstance, UiInstance } from "../../helper/test-helper";

import emojiData from "../../../../public/emoji.json";
import { withStore } from "../../tests/with-store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../api/misc", () => ({
  getEmojiData: () =>
    new Promise((resolve) => {
      resolve(emojiData);
    })
}));

const defProps = {
  defText: "",
  submitText: "Reply",
  users: [],
  global: globalInstance,
  activeUser: null,
  ui: UiInstance,
  entry: entryInstance1,
  inProgress: false,
  isCommented: false,
  cancellable: false,
  autoFocus: true,
  inputRef: null,
  location: {} as any,
  setActiveUser: () => {},
  updateActiveUser: () => {},
  deleteUser: () => {},
  onSubmit: () => Promise.resolve(),
  onCancel: () => {},
  toggleUIProp: () => {},
  resetSelection: () => {}
};

it("(1) Default render", () => {
  const props = { ...defProps };

  const component = withStore(
    <QueryClientProvider client={new QueryClient()}>
      <Comment {...props} />
    </QueryClientProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

it("(2) Cancellable, in progress", () => {
  const props = { ...{ inProgress: true, cancellable: true, defText: "foo" }, ...defProps };

  const component = withStore(
    <QueryClientProvider client={new QueryClient()}>
      <Comment {...props} />
    </QueryClientProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
