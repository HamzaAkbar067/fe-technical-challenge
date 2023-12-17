import { EN_LOCALE, DE_LOCALE } from "./constants";

export type MoneyInputProps = {
  value: number | null;
  isDisabled?: boolean;
  isDefault?: boolean;
  locale: typeof EN_LOCALE | typeof DE_LOCALE;
  onChange: (value: number) => void;
};
