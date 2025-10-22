import path from "path";
import { GetStaticProps } from "next";
import { parseFileByPath, renderMarkdown } from "@/lib/markdown";
import { MDXRemoteProps } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Box, Container, MDXRenderer, AspectRatio } from "@/components/ui";

import { FaqMoreInfo } from "@/components/features/faq/FaqMoreInfo";

type Props = {
  markdown: MDXRemoteProps;
};

export default function FAQ({ markdown }: Props) {
  return (
    <>
      <NextSeo
        title="Sleep Walker FAQ | Frequently Asked Questions"
        description="Jawaban atas pertanyaan yang sering diajukan seputar layanan dan produk Sleep Walker. Temukan solusi terbaik untuk setiap masalah Anda di FAQ kami."
        openGraph={{
          url: "https://sleepwalkerofficial.com/faq",
          title: "Sleep Walker FAQ | Frequently Asked Questions",
          description:
            "Panduan lengkap FAQ Sleep Walker untuk memberikan jawaban yang jelas dan mendetail tentang layanan dan produk kami.",
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
      <Box>
        <AspectRatio position="relative" ratio={1570 / 524}>
          <Image
            priority
            src="/images/hero/limabelas.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>

      <Box mb="150px">
        <Container w="100%" maxW="container.lg">
          <FaqMoreInfo />
          <MDXRenderer markdown={markdown} />
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { content } = parseFileByPath(
    path.join(process.cwd(), "content", "faqs", "faqs.mdx")
  );

  const markdown = await renderMarkdown(content);

  return {
    props: {
      markdown,
    },
  };
};
