import React from 'react';
import { CreditCard, Gift, Users, Wallet, ChevronRight } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="pt-16 pb-20">
      <div className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="font-medium text-lg">用户名称</h2>
            <p className="text-red-100">会员等级：黄金会员</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: '余额', value: '¥1,234' },
              { label: '可提现', value: '¥567' },
              { label: '救助金', value: '¥89' },
              { label: '国库券', value: '3张' }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-medium text-red-600">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { icon: Wallet, label: '充值提现' },
            { icon: Users, label: '我的团队' },
            { icon: Gift, label: '邀请奖励' },
            { icon: CreditCard, label: '银行卡管理' }
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl shadow-sm">
              <button className="w-full p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-red-600" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}