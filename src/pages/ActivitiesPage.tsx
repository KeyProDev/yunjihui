import React from 'react';

export function ActivitiesPage() {
  return (
      <div className="px-4 py-6">
        <div className="aspect-[2/1] rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 mb-6">
          <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80"
              alt="Activities Banner"
              className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex space-x-4">
                  <div className="w-24 h-24 rounded-lg bg-gray-100 flex-shrink-0">
                    <img
                        src={`https://images.unsplash.com/photo-1${600000000000 + item + 20}?auto=format&fit=crop&w=200&q=80`}
                        alt="Activity"
                        className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">活动主题 {item}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      活动时间：2024年3月{10 + item}日
                    </p>
                    <p className="text-sm text-gray-500">
                      参与人数：{item * 58}
                    </p>
                    <button className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded-full">
                      立即参与
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}
