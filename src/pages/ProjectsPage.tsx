import React from 'react';
import { Coins } from 'lucide-react';

export function ProjectsPage() {
  const plans = [
    {
      name: '金砖支付-货币篮子-计划A',
      price: '989',
      limit: '5000',
      coins: '100',
    },
    {
      name: '金砖支付-货币篮子-计划B',
      price: '3789',
      limit: '24000',
      coins: '400',
    },
    {
      name: '金砖支付-货币篮子-计划C',
      price: '6989',
      limit: '56000',
      coins: '800',
    },
    {
      name: '金砖支付-货币篮子-计划D',
      price: '9889',
      limit: '96000',
      coins: '1300',
    },
    {
      name: '金砖支付-货币篮子-计划E',
      price: '18489',
      limit: '216000',
      coins: '2600',
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <div className="h-24 bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 mb-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=50&q=80"
            alt="Bank Logo"
            className="w-6 h-6"
          />
          <span className="text-white text-sm">中国人民银行</span>
        </div>
        <div className="text-white mt-2">
          <span className="text-lg font-bold">金砖支付 金融改革</span>
          <div className="text-sm mt-1">1000-80万现金抢票活动区</div>
        </div>
      </div>

      {/* Plans */}
      <div className="px-4 space-y-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Coins className="w-6 h-6 text-blue-500" />
                <span className="text-gray-800 font-medium">{plan.name}</span>
              </div>
              <button className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-md text-sm font-medium">
                购买
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="border rounded-lg p-2">
                <div className="text-gray-500 text-xs mb-1">价格</div>
                <div className="text-red-500 font-bold">
                  <span className="text-sm">¥</span>
                  <span className="text-xl">{plan.price}</span>
                </div>
              </div>
              <div className="border rounded-lg p-2">
                <div className="text-gray-500 text-xs mb-1">特别提款权总额度</div>
                <div className="text-gray-800 font-bold">
                  <span className="text-sm">¥</span>
                  <span className="text-xl">{plan.limit}</span>
                </div>
              </div>
              <div className="border rounded-lg p-2">
                <div className="text-gray-500 text-xs mb-1">金砖元</div>
                <div className="text-gray-800 font-bold">
                  <span className="text-xl">{plan.coins}</span>
                  <span className="text-sm">枚</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
