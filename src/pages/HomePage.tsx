import React from 'react';
import { CreditCard, Globe2, Wallet, TrendingUp, Database, Globe, BadgeDollarSign, UserCheck, Send } from 'lucide-react';

export function HomePage() {
  const flags = [
    { country: 'Brazil', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=100&q=80' },
    { country: 'Russia', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=100&q=80' },
    { country: 'China', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=100&q=80' },
    { country: 'India', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=100&q=80' },
    { country: 'South Africa', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=100&q=80' },
  ];

  const services = [
    { icon: CreditCard, label: '实名中心', bgColor: 'bg-[#0095FF]', iconColor: 'text-[#0072C3]' },
    { icon: Globe2, label: '全球新闻', bgColor: 'bg-[#4CAF50]', iconColor: 'text-[#388E3C]' },
    { icon: CreditCard, label: '银行卡管理', bgColor: 'bg-[#FFC107]', iconColor: 'text-[#FFA000]' },
    { icon: TrendingUp, label: '金钱市场', bgColor: 'bg-[#FF9800]', iconColor: 'text-[#F57C00]' },
    { icon: Database, label: '总资产', bgColor: 'bg-[#7E57C2]', iconColor: 'text-[#5E35B1]' },
    { icon: Globe, label: '试点官网', bgColor: 'bg-[#F44336]', iconColor: 'text-[#D32F2F]' },
    { icon: BadgeDollarSign, label: '功能支付', bgColor: 'bg-[#2196F3]', iconColor: 'text-[#1976D2]' },
    { icon: UserCheck, label: '交易账户', bgColor: 'bg-[#4CAF50]', iconColor: 'text-[#388E3C]' },
    { icon: Send, label: '国际汇款', bgColor: 'bg-[#E91E63]', iconColor: 'text-[#C2185B]' },
  ];

  return (
    <div className="pt-16 pb-20 bg-gray-100">
      {/* Flags Section */}
      <div className="flex overflow-x-auto px-4 py-2 bg-white">
        {flags.map((flag, index) => (
          <div key={index} className="flex-shrink-0 w-16 h-10 mx-1 border border-gray-200 rounded overflow-hidden">
            <img src={flag.url} alt={flag.country} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="relative aspect-video bg-black mx-4 mt-4 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" 
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-white text-sm">
          08:10
        </div>
      </div>

      {/* Notification Card */}
      <div className="mx-4 mt-4 bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
        <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg">📢</span>
        </div>
        <span className="text-white">官方通知</span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-3 mx-4 mt-4">
        {services.map((service, index) => (
          <button
            key={index}
            className="flex flex-col items-center space-y-2 p-4"
          >
            <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
              <service.icon className={`w-8 h-8 text-white`} />
            </div>
            <span className="text-xs text-gray-700">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}