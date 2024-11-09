import React from 'react';
import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-2">
          <span className="text-red-600 font-bold text-xl">品牌</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}