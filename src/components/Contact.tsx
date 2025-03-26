import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">联系我们</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl text-center shadow-sm">
            <Phone className="h-8 w-8 text-rose-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">电话预约</h3>
            <p className="text-gray-600">020-XXXXXXXX</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm">
            <MapPin className="h-8 w-8 text-rose-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">地址</h3>
            <p className="text-gray-600">广州市天河区XXXX大厦</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm">
            <Clock className="h-8 w-8 text-rose-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">营业时间</h3>
            <p className="text-gray-600">周一至周日 9:00-21:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}