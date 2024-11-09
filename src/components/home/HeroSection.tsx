import React from 'react';

export function HeroSection() {
  return (
    <section className="px-4 py-6">
      <div className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">欢迎回来</h1>
        <p className="text-red-100">探索今天的精选内容</p>
      </div>
    </section>
  );
}