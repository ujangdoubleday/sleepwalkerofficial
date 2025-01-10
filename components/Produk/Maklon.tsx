import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";
import { 
  Button, 
  Flex 
} from "@/lib/ui";

export function Maklon() {
  return (
    <>
      <FancyLinkSection
        heading="Maklon Kosmetik Legal"
        description={`Maklon kosmetik legal adalah layanan di mana sebuah perusahaan atau individu bekerja sama dengan perusahaan yang memiliki izin resmi dan fasilitas produksi yang sesuai dengan standar regulasi, seperti dari BPOM. Perusahaan maklon bertanggung jawab untuk memproduksi produk kosmetik sesuai permintaan klien, namun tetap memenuhi persyaratan hukum dan kualitas yang ditetapkan, seperti sertifikasi Good Manufacturing Practice (GMP) dan proses registrasi produk. Produk yang dihasilkan harus aman, terjamin kualitasnya, dan memiliki izin edar yang sah sebelum dipasarkan. Dengan menggunakan layanan maklon kosmetik legal, pengusaha dapat memproduksi kosmetik tanpa perlu memiliki fasilitas produksi sendiri, asalkan memilih mitra maklon yang sudah terdaftar dan memenuhi standar peraturan yang berlaku.`}
        ctaText=""
        ctaLink=""
        imageUrl="/images/proyek/maklon-kosmetik.png"
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
      <Flex mb="120px" justifyContent="center" px={2}>
        <Button
          bg="white"
          _hover={{ bg: "gray.100" }}
          _focus={{ bg: "gray.100" }}
          size="lg"
          as="a"
          href="https://maklonkosmetiklegal.com/"
          target="_blank"
          rel="noreferrer"
        >
          Selengkapnya
        </Button>
      </Flex>
    </>
  );
}
