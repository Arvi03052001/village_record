import React from 'react';
import { Sun, Moon, DollarSign, Users, Languages } from 'lucide-react';

export const MainPage = () => {
  const buttons = [
    { icon: Sun, label: 'AM', color: 'from-amber-400 to-orange-500', hoverColor: 'from-amber-500 to-orange-600' },
    { icon: Moon, label: 'PM', color: 'from-indigo-500 to-blue-600', hoverColor: 'from-indigo-600 to-blue-700' },
    { icon: DollarSign, label: 'PRICE', color: 'from-emerald-400 to-teal-500', hoverColor: 'from-emerald-500 to-teal-600' },
    { icon: Users, label: 'USERS', color: 'from-purple-500 to-violet-600', hoverColor: 'from-purple-600 to-violet-700' },
    { icon: Languages, label: 'LANGUAGE', color: 'from-rose-400 to-pink-500', hoverColor: 'from-rose-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Milk Record</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {buttons.map(({ icon: Icon, label, color, hoverColor }) => (
            <button
              key={label}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} transition-all duration-300 group-hover:${hoverColor}`} />
              <div className="relative p-8 flex flex-col items-center space-y-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <span className="font-bold text-lg text-white tracking-wide">{label}</span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};