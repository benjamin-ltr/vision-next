import { EntryPageCrossPostBody } from "@/app/[...slugs]/_entry-components/entry-page-cross-post-body";
import { EntryPageWarnings } from "@/app/[...slugs]/_entry-components/entry-page-warnings";
import { EntryPageIsCommentHeader } from "@/app/[...slugs]/_entry-components/entry-page-is-comment-header";
import { EntryPageBodyViewer } from "@/app/[...slugs]/_entry-components/entry-page-body-viewer";
import { EntryPageMainInfo } from "@/app/[...slugs]/_entry-components/entry-page-main-info";
import { EntryPageProfileBox } from "@/app/[...slugs]/_entry-components/entry-page-profile-box";
import { EntryTags } from "@/app/[...slugs]/_entry-components/entry-tags";
import { EntryFooterInfo } from "@/app/[...slugs]/_entry-components/entry-footer-info";
import { EntryFooterControls } from "@/app/[...slugs]/_entry-components/entry-footer-controls";
import { EntryPageShowOriginal } from "@/app/[...slugs]/_entry-components/entry-page-show-original";
import { EntryPageSimilarEntries } from "@/app/[...slugs]/_entry-components/entry-page-similar-entries";
import { EntryPageDiscussions } from "@/app/[...slugs]/_entry-components/entry-page-discussions";
import { Entry } from "@/entities";
import { EntryPageNsfwRevealing } from "@/app/[...slugs]/_entry-components/entry-page-nsfw-revealing";

interface Props {
  entry: Entry;
  rawParam: string;
  isEdit: boolean;
  category: string;
}

export function EntryPageContent({ entry, rawParam, isEdit, category }: Props) {
  return (
    <EntryPageNsfwRevealing entry={entry}>
      <EntryPageCrossPostBody entry={entry} />
      <EntryPageProfileBox entry={entry} />
      <div className="entry-header">
        <EntryPageWarnings entry={entry} />
        <EntryPageIsCommentHeader entry={entry} />
        <h1 className="entry-title">{entry.title}</h1>
        <EntryPageMainInfo entry={entry} />
      </div>
      <EntryPageBodyViewer entry={entry} rawParam={rawParam} isEdit={isEdit} />
      <div className="entry-footer flex-wrap mb-4 lg:mb-8 border border-[--border-color] p-2 md:p-4 rounded-2xl">
        <EntryTags entry={entry} />
        <EntryFooterInfo entry={entry} />
        <EntryFooterControls entry={entry} />
      </div>
      <EntryPageShowOriginal entry={entry} />
      <EntryPageSimilarEntries entry={entry} />
      <EntryPageDiscussions category={category} entry={entry} />
    </EntryPageNsfwRevealing>
  );
}
