import { DE_LOCALE } from "./MoneyInput/constants";

export const formatCurrency = (value: number, locale: string): string => {
  const amount = new Intl.NumberFormat(locale, {
    currency: "EUR", minimumFractionDigits: 2  }).format(value / 100);
  const cleanedAmount = amount.replace(/\s+/g, "");
  return cleanedAmount;
};

export const parseCurrency = (value: string, locale: string): number => {
  const currency = locale === DE_LOCALE ? value.replace(/\./g, "").replace(",", ".") : value;
  const parsedValue = Number.parseFloat(currency.replace(/[^\d.]/g, ""));
  return Math.round(parsedValue * 100);
};

export const strCurrencyToNumber = (value: string, locale: string): string =>
  locale === DE_LOCALE ? value.replace(/\./g, "").replace(",", ".") : value.replace(",", "");
