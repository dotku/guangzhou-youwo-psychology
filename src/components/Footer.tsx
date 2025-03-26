import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">广州尤我</span>
          </div>
          <p className="text-gray-400">© 2024 广州尤我心理咨询中心. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}