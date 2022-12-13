import { AnimatePresence } from "framer-motion";
import { PresentationView, Sidebar } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PresentationView>
        <Sidebar />
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
