import React from 'react';

export function FeaturedProjects() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">推荐项目</h2>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm p-4">
            <div className="aspect-square rounded-lg bg-gray-100 mb-3">
              <img
                src={`https://images.unsplash.com/photo-1${600000000000 + item}?auto=format&fit=crop&w=300&q=80`}
                alt="Featured"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-medium text-sm">项目 {item}</h3>
            <p className="text-xs text-gray-500 mt-1">简短描述</p>
          </div>
        ))}
      </div>
    </section>
  );
}