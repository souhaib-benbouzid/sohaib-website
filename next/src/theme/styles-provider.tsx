import { CacheProvider, EmotionCache } from "@emotion/react";

import { FC } from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { useTheme } from "@mui/material/styles";

const rtlCash = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin as any],
});

interface Props {
  cacheLtr: EmotionCache;
}

export const StyleProvider: FC<Props> = ({ cacheLtr, children }) => {
  const theme = useTheme();
  const emotionCache = theme.direction === "rtl" ? rtlCash : cacheLtr;

  return (
    <CacheProvider value={emotionCache}>
      <div dir={theme.direction}>{children}</div>
    </CacheProvider>
  );
};
