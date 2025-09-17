import { useContext } from 'react';
import { BitcoinContext } from '../contexts/BitcoinContext';

export default function BitcoinWallet() {
  const { walletAddress, setWalletAddress, balance } = useContext(BitcoinContext);

  const connectWallet = () => {
    // Simulate connecting a wallet
    setWalletAddress('bc1qexampleaddress1234567890');
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Bitcoin Wallet</h2>
      {walletAddress ? (
        <div>
          <p className="text-green-400">Connected: {walletAddress}</p>
          <p>Balance: {balance} BTC</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}