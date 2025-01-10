import { AppProps } from "next/app";
import Head from "next/head";
import { SleepwalkerUIProvider, LoadFonts, MDXRenderer } from "@/lib/ui";
import { IntlProvider } from "@/intl/IntlProvider";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "highlight.js/styles/atom-one-dark.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MainLayout } from "@/layouts/Main/Main";
import { MaintenanceLayout } from "@/layouts/Maintenance/Maintenance";

import "@/styles/global.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const Layout = isMaintenanceMode ? MaintenanceLayout : MainLayout;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics gaMeasurementId="G-2XEV3QZ6DR" trackPageViews />
      <MDXRenderer.Provider>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            <SleepwalkerUIProvider>
              <LoadFonts />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SleepwalkerUIProvider>
          </QueryClientProvider>
        </IntlProvider>
      </MDXRenderer.Provider>
    </>
  );
}

export default App;
