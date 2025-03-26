import React from 'react';
import { Award, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Team"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">关于我们</h2>
            <p className="text-gray-600 mb-6">
              广州尤我心理咨询中心拥有专业的心理咨询师团队，致力于为广大市民提供优质的心理健康服务。我们秉持专业、真诚、保密的原则，帮助每一位来访者找到内心的力量。
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-rose-500" />
                <span>专业认证团队</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span>温暖贴心服务</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}