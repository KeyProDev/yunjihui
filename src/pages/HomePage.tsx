import React from 'react';
import { CheckCircle, Users, Gift, Phone, FileText, Video, Info } from 'lucide-react';
import {Header} from "../components/layout/Header.tsx";
import { Swiper } from "antd-mobile";

export function HomePage() {
  const services = [
    { icon: CheckCircle, label: '每日签到', bgColor: 'bg-[#0095FF]', iconColor: 'text-[#0072C3]' },
    { icon: Users, label: '我的团队', bgColor: 'bg-[#4CAF50]', iconColor: 'text-[#388E3C]' },
    { icon: Gift, label: '福利中心', bgColor: 'bg-[#FFC107]', iconColor: 'text-[#FFA000]' },
    { icon: Phone, label: '联系客服', bgColor: 'bg-[#FF9800]', iconColor: 'text-[#F57C00]' },
    { icon: FileText, label: '政策补贴', bgColor: 'bg-[#7E57C2]', iconColor: 'text-[#5E35B1]' },
    { icon: Video, label: '直播间', bgColor: 'bg-[#F44336]', iconColor: 'text-[#D32F2F]' },
    { icon: Info, label: '关于我们', bgColor: 'bg-[#2196F3]', iconColor: 'text-[#1976D2]' },
  ];

  const projects = [
    {
      "title": "绿色能源项目",
      "period": "3个月",
      "reward": "现金回报"
    },
    {
      "title": "智能家居系统",
      "period": "6个月",
      "reward": "股权分红"
    },
    {
      "title": "区块链技术开发",
      "period": "1年",
      "reward": "产品折扣"
    },
    {
      "title": "在线教育平台",
      "period": "2年",
      "reward": "积分奖励"
    }
  ]

  return (
      <div className="bg-transparent">
        {/* Video Section */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <div
                    className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"/>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-white text-sm">
            08:10
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-2 my-3">
          {services.map((service, index) => (
              <button
                  key={index}
                  className="flex flex-col items-center space-y-2 p-2"
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
                  <service.icon className={`w-8 h-8 text-white`}/>
                </div>
                <span className="text-xs text-gray-700">{service.label}</span>
              </button>
          ))}
        </div>

        {/* ProjectIntro & GroupCenter/PromotionActivity Grid */}
        <div className="w-full flex">
          <div className="w-1/2">
            <Swiper loop>
              {
                projects.map((project, index) => (
                    <Swiper.Item key={index}>
                      <div
                          className="h-64 flex justify-center items-center select-none px-2"
                      >
                        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                          <img
                              className="w-full h-32 object-cover"
                              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80"
                              alt="Project"
                          />
                          {/* Content Section */}
                          <div className="p-2 h-24 flex flex-col justify-between align-middle">
                            <div>
                              <h2 className="text-black text-sm font-bold mb-1">{project.title}</h2>
                              <div className="flex justify-between">
                                <p className="text-gray-700 text-xs mb-1">{project.reward}</p>
                                <p className="text-gray-500 text-xs mb-1">{project.period}</p>
                              </div>
                            </div>
                            <div className={"text-center"}>
                              <button className="bg-primary text-secondary text-xs px-4 rounded-lg">
                                立即投资
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Swiper.Item>
                ))
              }
            </Swiper>
          </div>
          <div className="w-1/2 h-64 py-4 px-2">
            <div className={"relative"}>
              <a href="/group-center">
                <img
                    src="https://cdn.schomburg.com/media/W1siZiIsIjc0Mi8zMjcvNzQyMzI3ZjdlNzE3NjFkZDQ1Zjg1ZmM5YTU4YmIwOGYuanBnIl0sWyJwIiwiY29udmVydCIsIi1yZXNpemUgMTAyNHg4MDBeIC1ncmF2aXR5IGNlbnRlciAtZXh0ZW50IDEwMjR4ODAwIC1hdXRvLW9yaWVudCAtYmFja2dyb3VuZCB3aGl0ZSAtY29sb3JzcGFjZSBzUkdCIC1mbGF0dGVuIC1zdHJpcCAtcXVhbGl0eSA2MCAtaW50ZXJsYWNlIFBsYW5lIix7ImZvcm1hdCI6ImpwZyIsImZyYW1lIjowfV1d/Link-Business-Center-Vilnus-Schomburg-Abdichtung-WU-Beteon-Betocrete-1-web.jpg?sha=643125d6f0177096"
                    alt="Group Center"
                    className="w-full h-28 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full h-full rounded-lg">
                  <span className="text-white text-lg font-bold px-2 rounded">拼团中心</span>
                </div>
              </a>
            </div>
            <div className={"mt-4"}>
              <Swiper loop>
                {
                  projects.map((project, index) => (
                      <Swiper.Item key={index}>
                        <div
                            className="h-28 select-none"
                        >
                          <div className="rounded-lg shadow-md overflow-hidden">
                            <img
                                className="w-full h-24"
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                                alt="Project"
                            />
                          </div>
                        </div>
                      </Swiper.Item>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
  );
}
