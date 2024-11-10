import React from 'react';
import { CreditCard, Gift, Users, Wallet, ChevronRight, Receipt, Folder, DollarSign, BarChart, Shield, Banknote } from 'lucide-react';

export function ProfilePage() {
  return (
      <div className={"p-2"}>
        <div className="">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden border-4 border-gray-200">
              <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <h2 className="font-black text-lg">用户名称</h2>
              <p className="">会员等级：黄金会员</p>
            </div>
          </div>
        </div>

        <div className="mt-2 space-y-5">
          <div className="bg-gradient-to-b from-[#FF0000] to-[#950800] rounded-2xl shadow-sm p-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label1: '我的余额', value1: '¥1,234', label2: '可提现余额', value2: '¥234' },
                { label1: '救助款', value1: '¥567', label2: '国库券', value2: '¥777' },
                { label1: '团队长等级', value1: '7级', label2: '当前返佣比例', value2: '77%' },
              ].map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-sm text-white mt-1">{item.label1}</p>
                    <p className="text-xl font-black text-secondary">{item.value1}</p>
                    <p className="text-sm text-gray-100 mt-3">{item.label2}</p>
                    <p className="text-xl font-black text-secondary">{item.value2}</p>
                  </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-2xl flex justify-center items-center space-x-2 p-3">
              <span className={"bg-gray-200 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center"}>
                <Receipt />
              </span>
              <span className={"text-gray-700 text-lg"}>
                立即充值
              </span>
            </div>
            <div className="bg-white rounded-2xl flex justify-center items-center space-x-2 p-3">
              <span className={"bg-gray-200 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center"}>
                <Receipt />
              </span>
              <span className={"text-gray-700 text-lg"}>
                立即提现
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-white rounded-2xl shadow-sm">
              <button className="w-full p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Wallet className="w-8 h-8 text-gray-700"/>
                  <span className={"text-gray-700 text-lg"}>云基金</span>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-400"/>
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm">
              <button className="w-full p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-gray-700"/>
                  <span className={"text-gray-700 text-lg"}>邀请好友</span>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-400"/>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button
                className="flex flex-col items-center space-y-2 p-2"
            >
              <div className={`w-14 h-14 bg-[#0095FF] rounded-2xl flex items-center justify-center`}>
                <Folder className={`w-8 h-8 text-white`}/>
              </div>
              <span className="text-xs font-black text-gray-700">我的项目</span>
            </button>
            <button
                className="flex flex-col items-center space-y-2 p-2"
            >
              <div className={`w-14 h-14 bg-[#4CAF50] rounded-2xl flex items-center justify-center`}>
                <Users className={`w-8 h-8 text-white`}/>
              </div>
              <span className="text-xs font-black text-gray-700">我的团队</span>
            </button>
            <button
                className="flex flex-col items-center space-y-2 p-2"
            >
              <div className={`w-14 h-14 bg-[#FFC107] rounded-2xl flex items-center justify-center`}>
                <DollarSign className={`w-8 h-8 text-white`}/>
              </div>
              <span className="text-xs font-black text-gray-700">资金明细</span>
            </button>

            <button
                className="flex flex-col items-center space-y-2 p-2"
            >
              <div className={`w-14 h-14 bg-[#FF9800] rounded-2xl flex items-center justify-center`}>
                <BarChart className={`w-8 h-8 text-white`}/>
              </div>
              <span className="text-xs font-black text-gray-700">收益记录</span>
            </button>
            <button
                className="flex flex-col items-center space-y-2 p-2"
            >
              <div className={`w-14 h-14 bg-[#7E57C2] rounded-2xl flex items-center justify-center`}>
                <Shield className={`w-8 h-8 text-white`}/>
              </div>
              <span className="text-xs font-black text-gray-700">实名认证</span>
            </button>
            <button
                className="flex flex-col items-center space-y-2 p-2"
            >
              <div className={`w-14 h-14 bg-[#F44336] rounded-2xl flex items-center justify-center`}>
                <Banknote className={`w-8 h-8 text-white`}/>
              </div>
              <span className="text-xs font-black text-gray-700">银行信息</span>
            </button>
          </div>
        </div>
      </div>
  );
}
