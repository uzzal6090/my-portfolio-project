import { Home, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui';

export default function NotFound() {
  return (
    <div className="py-20 flex flex-col items-center justify-center text-center space-y-5 animate-fade-in-up">
      <div className="p-3.5 bg-amber-50 text-amber-600 rounded-2xl border border-amber-200/80 shadow-2xs">
        <AlertCircle className="w-8 h-8" />
      </div>
      <div className="space-y-1.5">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">404</h1>
        <h2 className="text-lg sm:text-xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-sm text-slate-500 max-w-sm">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <Button
        href="/"
        variant="primary"
        size="md"
        icon={<Home className="w-4 h-4" />}
      >
        Return to Home
      </Button>
    </div>
  );
}
