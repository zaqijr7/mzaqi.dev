import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { PresentationView, Sidebar } from "@components/index";
import { dontAllowSidebar } from "@utils/constant";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const IsVisibleSidebar = () => {
    if (!dontAllowSidebar.includes(router.pathname)) {
      return <Sidebar />;
    }
  };

  return (
    <>
      <PresentationView {...pageProps}>
        <IsVisibleSidebar />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </PresentationView>
    </>
  );
}

export default MyApp;
