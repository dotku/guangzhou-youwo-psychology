import React from 'react';
import { Star, Clock3, Users, Award, Sparkles } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">收费标准</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">高级咨询师</h3>
              <div className="flex">
                <Star className="h-6 w-6 text-rose-500" />
                <Star className="h-6 w-6 text-rose-500" />
                <Star className="h-6 w-6 text-rose-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-rose-500 mb-4">
              ¥99<span className="text-base text-gray-600">/次</span>
            </div>
            <div className="space-y-4 flex-grow">
              <div className="flex items-center">
                <Clock3 className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>60-90分钟专业咨询</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>一对一电话咨询服务</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>专业心理咨询师</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors">
              立即预约
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-rose-500 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">资深咨询师</h3>
              <div className="flex">
                <Star className="h-6 w-6 text-rose-500" />
                <Star className="h-6 w-6 text-rose-500" />
                <Star className="h-6 w-6 text-rose-500" />
                <Star className="h-6 w-6 text-rose-500" />
                <Star className="h-6 w-6 text-rose-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-rose-500 mb-4">
              ¥199<span className="text-base text-gray-600">/次</span>
            </div>
            <div className="space-y-4 flex-grow">
              <div className="flex items-center">
                <Clock3 className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>60-90分钟深度咨询</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>一对一电话咨询服务</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>丰富案例经验</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                <span>更专业的问题解析</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors">
              立即预约
            </button>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          我们的咨询师都经过专业培训和认证，区别在于资深咨询师拥有更丰富的案例经验，能更快更准确地找到问题核心。
        </p>
      </div>
    </section>
  );
}