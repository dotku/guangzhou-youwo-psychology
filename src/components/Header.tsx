import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold text-white">广州尤我</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#services" className="hover:text-rose-300">服务项目</a>
            <a href="#cases" className="hover:text-rose-300">成功案例</a>
            <a href="#pricing" className="hover:text-rose-300">收费标准</a>
            <a href="#about" className="hover:text-rose-300">关于我们</a>
            <a href="#contact" className="hover:text-rose-300">联系方式</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">专业心理咨询服务</h1>
          <p className="text-xl text-white/90 mb-8">为您提供专业的心理健康服务，帮助您找到内心的平静与力量</p>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-colors">
            预约咨询
          </button>
        </div>
      </div>
    </header>
  );
}