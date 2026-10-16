import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Page Content Outlet */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
