import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
            <span className="text-lg md:text-xl font-bold">广州尤我</span>
          </div>
          <p className="text-sm md:text-base text-gray-400 text-center md:text-left"> 2024 广州尤我心理咨询中心. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}