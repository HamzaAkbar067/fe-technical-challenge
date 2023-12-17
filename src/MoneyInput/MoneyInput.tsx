import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { MoneyInputProps } from "./types";
import _styles from "./MoneyInput.module.css";
import { SUPPORTED_LANG, LANG_HINT  } from "./constants";
import { formatCurrency, parseCurrency, strCurrencyToNumber } from "../utils";

const MoneyInput: React.FC<MoneyInputProps> = ({
  value,
  locale,
  onChange,
  isDisabled = false,
  isDefault = false
}) => {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const prevValueRef = useRef<number | null>(null);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      setDisplayValue(formatCurrency(value || 0, locale));
    }
  }, [value, locale]);

  const validateInput = (value: string): boolean => {
    let errorMessage = "";
    let hasError = false;
    const currency = strCurrencyToNumber(value, locale);
  
    if (value === "") {
      hasError = true;
      errorMessage = "Please add a value";
    }

    if (isNaN(+currency)) {
      hasError = true;
      errorMessage = "Invalid currency format";
    }

    setError(errorMessage);
    return hasError;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const { type } = event;

    setDisplayValue(inputValue);

    validateInput(inputValue);
    if (!validateInput(inputValue)) {
      const intValue = parseCurrency(inputValue, locale);
      console.log(`New value in cents (on ${type}):`, intValue);

      if (!isNaN(intValue)) {
        onChange(intValue);
      }
    }
  };
  const lebal = isDefault ? "Default*" :  `Please Enter Curreny in ${SUPPORTED_LANG [locale]} Format i.e ${LANG_HINT[locale]}`;

  return (
    <form className={`${isDefault && _styles.defaultForm}`}>
      <label className={_styles.label}>
       {lebal}
      </label>
      <input
        disabled={isDisabled}
        type="text"
        placeholder={isDefault ? "Default" : "Text"}
        className={`${_styles.moneyInput} ${ error && _styles.error} `}
        value={`${displayValue}`}
        onChange={handleInputChange}
        onBlur={handleInputChange}
      />
      <p className={_styles.errorText}>
        {error}
      </p>
    </form>
  );
};

export default MoneyInput;
