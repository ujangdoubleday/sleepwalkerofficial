import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import path from "path";
import { PrivacyPolicyLayout } from "@/layouts/PrivacyPolicy/PrivacyPolicy";
import { ComponentProps } from "react";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import { assertString } from "@/lib/utils";
import { MDXRenderer } from "@/components/ui";

type Props = {
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
};

export default function KebijakanPrivasi({ markdown }: Props) {
  return (
    <>
      <NextSeo
        title="Kebijakan Privasi Sleep Walker | Komitmen Kami terhadap Privasi Pengguna"
        description="Komitmen Kami terhadap Privasi Pengguna"
        openGraph={{
          url: "https://sleepwalkerofficial.com/kebijakan-privasi",
          title:
            "Kebijakan Privasi Sleep Walker | Komitmen Kami terhadap Privasi Pengguna",
          description: "Komitmen Kami terhadap Privasi Pengguna",
          images: [
            {
              url: "https://sleepwalkerofficial.com/images/logo_og.png",
              width: 800,
              height: 800,
              alt: "Sleep Walker Official",
            },
          ],
        }}
      />
      <PrivacyPolicyLayout markdown={markdown} />
    </>
  );
}

const CONTENT_PATH = path.join(
  process.cwd(),
  "content",
  "legal",
  "privacy-policy.mdx"
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { frontMatter, content } = parseFileByPath(CONTENT_PATH);

  const markdown = await renderMarkdown(content);

  return {
    props: {
      title: assertString(frontMatter.title),
      description: assertString(frontMatter.description, ""),
      markdown,
    },
  };
};
