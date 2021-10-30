import "nprogress/nprogress.css";
import "src/components/loading-indicator/styles.css";

import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import Router from "next/router";
import { StyleProvider } from "src/theme/styles-provider";
import Theme from "src/theme";
import { appWithTranslation } from "next-i18next";
import createEmotionCache from "src/theme/create-emotion-cache";
import { useStore } from "src/redux";

//Binding loading indicator events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({
  showSpinner: false,
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Theme>
        <StyleProvider cacheLtr={emotionCache}>
          <Component {...pageProps} />
        </StyleProvider>
      </Theme>
    </Provider>
  );
}

// The appWithTranslation HOC is primarily responsible for adding a I18nextProvider.
export default appWithTranslation(MyApp);
