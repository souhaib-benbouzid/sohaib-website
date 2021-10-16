import { CacheProvider, EmotionCache } from "@emotion/react";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Theme from "src/theme";
import { appWithTranslation } from "next-i18next";
import createEmotionCache from "src/theme/create-emotion-cache";
import { useStore } from "src/redux";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </Provider>
    </CacheProvider>
  );
}

// The appWithTranslation HOC is primarily responsible for adding a I18nextProvider.
export default appWithTranslation(MyApp);
