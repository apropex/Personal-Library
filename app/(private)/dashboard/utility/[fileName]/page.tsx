//

import { CodeBlock } from "@/components/ui/code-block";
import { getUtilityContent } from "@/components/utility-page-components/utility-contents";
import joinString from "@/utils/joinString";

export default async function UtilityDetailsPage({
  params,
}: {
  params: Promise<{ fileName: string }>;
}) {
  const param = (await params).fileName as string;

  const { language, fileName, extension, highlightLines, code } =
    getUtilityContent(param);

  return (
    <div className="">
      <CodeBlock
        language={language}
        filename={joinString(fileName, extension)}
        highlightLines={highlightLines}
        code={code || ""}
      />
    </div>
  );
}
