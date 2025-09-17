import { createContext, useState, useEffect } from 'react';

export const BitcoinContext = createContext();

export function BitcoinProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(0);

  // Example: simulate fetching Bitcoin balance
  useEffect(() => {
    if (walletAddress) {
      // TODO: Replace with real Bitcoin API call
      setBalance(Math.random().toFixed(4)); 
    }
  }, [walletAddress]);

  return (
    <BitcoinContext.Provider value={{ walletAddress, setWalletAddress, balance }}>
      {children}
    </BitcoinContext.Provider>
  );
}