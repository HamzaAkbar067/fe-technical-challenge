import React, { useState } from 'react';
import MoneyInput from './MoneyInput/MoneyInput';
import { EN_LOCALE } from "./MoneyInput/constants";

const App: React.FC = () => {
  const [moneyValue, setMoneyValue] = useState<number | null>(null);
  const handleMoneyInputChange = (value: number) => setMoneyValue(value);

  return (
    <div>
      <h1>MoneyInput Component Example</h1>
      <MoneyInput value={moneyValue} locale={EN_LOCALE} onChange={handleMoneyInputChange} />
    </div>
  );
};

export default App;
