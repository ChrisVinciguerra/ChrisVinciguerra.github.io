import "../styles/globals.css";
import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null
      }
    }
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
