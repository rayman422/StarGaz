import { useState } from 'react';

export default function LiveStream() {
  const [live, setLive] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Live Stream</h2>
      {live ? (
        <div className="text-green-400">🔴 Live Now</div>
      ) : (
        <div className="text-gray-400">No stream active</div>
      )}
      <button
        onClick={() => setLive(!live)}
        className="mt-2 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
      >
        {live ? 'End Stream' : 'Start Stream'}
      </button>
    </div>
  );
}