import { FC } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "src/localization/i18next";

export const TranslationsProvider: FC = (props) => {
  return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
};
