import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-400">🌌 Star Gaze</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-green-300">Home</Link>
        <Link href="/dashboard" className="hover:text-green-300">Dashboard</Link>
      </div>
    </nav>
  );
}