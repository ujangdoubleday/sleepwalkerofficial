import Link from "next/link";
import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";
import { 
  Text, 
  Box, 
  Container, 
  Grid, 
  GridItem, 
  ShadowBox 
} from "@/lib/ui";

const CONTACTUS = [
  {
    metric: "WhatsApp",
    label: "082110983288",
    link: "https://api.whatsapp.com/send/?phone=6282110983288&text&type=phone_number&app_absent=0",
  },
  {
    metric: "Instagram",
    label: "@alfarisi.packaging",
    link: "https://www.instagram.com/alfarisi.packaging/",
  },
  {
    metric: "Lokasi",
    label:
      "Desa Situdaun RT 11/03, Kecamatan Tenjolaya, Bogor, Indonesia 16371",
    link: "https://maps.app.goo.gl/EZtsJ1epd3c2xrAL8",
  },
];

export function Kemasan() {
  return (
    <>
      <FancyLinkSection
        heading="Kemasan"
        description={`Alfarisi Packaging adalah produsen kemasan terpercaya yang berlokasi di Bogor, Jawa Barat dan telah bekerja sama dengan Sleepwalker Official yang berkomitmen menyediakan solusi packaging berkualitas tinggi untuk berbagai kebutuhan industri. Dengan pengalaman dan keahlian dalam desain serta produksi, kami menghadirkan kemasan yang tidak hanya fungsional tetapi juga estetis, sesuai dengan kebutuhan spesifik klien. Alfarisi Packaging melayani berbagai sektor, mulai dari makanan dan minuman hingga produk kecantikan, dengan fokus pada inovasi, keberlanjutan, dan kepuasan pelanggan. Sebagai mitra andal, kami terus berupaya mendukung bisnis klien melalui layanan profesional dan hasil yang memaksimalkan nilai produk mereka di pasar.`}
        ctaText=""
        ctaLink=""
        imageUrl="/images/proyek/alfarisi.png"
        containerProps={{
          maxW: {
            base: "704px",
            lg: "1600px",
          },
          w: "100%",
          py: {
            base: 24,
            md: 32,
            xl: "150px",
          },
          pl: {
            lg: "40px",
            xl: "64px",
            "2xl": "128px",
          },
        }}
      />
      <Text
        textStyle="h5"
        my={{
          base: "5px",
        }}
        textAlign="center"
      >
        Kontak
      </Text>
      <Container
        w="100%"
        maxW="container.2xl"
        px={{
          base: 5,
          lg: 10,
          xl: 16,
        }}
        py={{
          base: 10,
        }}
      >
        <Grid
          templateColumns={{
            base: "100%",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {CONTACTUS.map((item, i) => {
            return (
              <GridItem key={i} display="flex">
                <ShadowBox shadowColor="blue.400">
                  <Box p={8}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Text
                        textStyle="h3"
                        marginBottom={1}
                        color="blue.600"
                        _hover={{ textDecoration: "underline" }}
                      >
                        {item.metric}
                      </Text>
                      <Text textStyle="h4" color="gray.700">
                        {item.label}
                      </Text>
                    </Link>
                  </Box>
                </ShadowBox>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
