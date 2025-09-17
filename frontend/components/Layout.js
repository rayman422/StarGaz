import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-center p-4">
        <p className="text-gray-400">© {new Date().getFullYear()} Star Gaze</p>
      </footer>
    </div>
  );
}