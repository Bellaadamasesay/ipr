import { Shield } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-indigo-700">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Sierra Leone IPR</span>
            </a>
          </div>
          <Navigation />
        </div>
      </nav>
    </header>
  );
}