import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { PresentationView, Sidebar } from "@components/index";
import { dontAllowSidebar } from "@utils/constant";
import { Provider } from "react-redux";
import "@styles/globals.css";
import { store } from "@redux/store";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(pageProps, "<<<< props");

  const IsVisibleSidebar = () => {
    if (!dontAllowSidebar.includes(router.pathname)) {
      return <Sidebar />;
    }
  };

  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default MyApp;
