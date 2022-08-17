import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import { WhitelistProvider } from "../context/WhitelistProvider";
import { ToastContainer } from "react-toastify";

const styles = {
  container: `flex flex-col bg-gradient h-[100vh]`,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WhitelistProvider>
      <Layout>
        <main className={styles.container}>
          <Component {...pageProps} />
        </main>
      </Layout>
      <ToastContainer theme="dark" />
    </WhitelistProvider>
  );
}

export default MyApp;
