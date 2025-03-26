import React from 'react';
import { MessageCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "咨询师很专业，帮我走出了人生低谷。现在的我充满信心，对未来充满期待。",
    author: "小李，25岁",
    type: "抑郁症康复"
  },
  {
    content: "通过咨询，我学会了如何与伴侣有效沟通。我们的关系比以前更亲密了。",
    author: "小王，32岁",
    type: "婚恋咨询"
  },
  {
    content: "感谢咨询师的耐心倾听和专业建议，帮助我找到了适合自己的解决方案。",
    author: "小张，28岁",
    type: "职场压力"
  }
];

export function Cases() {
  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">成功案例</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">抑郁症康复案例</h3>
            <p className="text-gray-600 mb-4">
              一位25岁的年轻白领，因工作压力导致严重抑郁。通过为期3个月的心理咨询，帮助其建立健康的压力管理机制，重拾生活信心。现已完全康复，重返工作岗位。
            </p>
            <div className="flex items-center text-rose-500">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">了解详情</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">婚恋关系修复</h3>
            <p className="text-gray-600 mb-4">
              一对结婚5年的夫妻，因沟通问题导致关系濒临破裂。通过6次专业咨询，帮助双方理解彼此需求，建立有效沟通模式，最终成功修复关系。
            </p>
            <div className="flex items-center text-rose-500">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">了解详情</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-12">来访者反馈</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm flex flex-col h-full">
              <Quote className="h-8 w-8 text-rose-500/20 mb-4" />
              <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
              <div className="border-t pt-4 mt-auto">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}