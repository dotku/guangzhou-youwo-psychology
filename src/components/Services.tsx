import React from 'react';
import { Brain, ChevronRight, Users, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-8 w-8 text-rose-500" />,
    title: "个人心理咨询",
    description: "一对一专业心理咨询服务，为您提供个性化的解决方案"
  },
  {
    icon: <Users className="h-8 w-8 text-rose-500" />,
    title: "团体心理辅导",
    description: "小组互动therapy，共同探索成长与治愈之路"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-rose-500" />,
    title: "心理评估",
    description: "专业的心理测评，帮助您更好地了解自己"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">我们的服务</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-rose-500 flex items-center group">
                了解更多 
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}