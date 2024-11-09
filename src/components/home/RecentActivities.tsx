import React from 'react';

export function RecentActivities() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">近期活动</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm p-4 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0">
              <img
                src={`https://images.unsplash.com/photo-1${600000000000 + item + 10}?auto=format&fit=crop&w=150&q=80`}
                alt="Activity"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-medium">活动 {item}</h3>
              <p className="text-sm text-gray-500">3月{item + 10}日</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}